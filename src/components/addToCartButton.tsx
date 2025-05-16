import { useEffect, useState } from "react"
import { addToListCart, getCartItems, remove } from "../store"
import type { Ingredient, IngredientGroup, Item, ItemTuple } from "../type"

interface Props {
	recipeId: string
	ingredients: IngredientGroup[]
}

export function AddToCartButton({ ingredients, recipeId }: Props) {
	const [displayText, setDisplayText] = useState<string | undefined>()
	const ingredientsList = ingredients
		.flatMap((elem) => elem.ingredients)
		.map((elem: ItemTuple) => {
			return {
				ingredient: elem[0],
				quantity: elem[1] ? elem[1] : 1,
				unit: elem[2],
			}
		})

	useEffect(() => {
		function loadIngredientsToCart() {
			try {
				const cart = getCartItems()
				if (isSomeIngredientsInCart(cart, ingredientsList, recipeId)) {
					setDisplayText("Eliminar de la cesta")
				} else {
					setDisplayText("Añadir a la cesta")
				}
			} catch (e) {
				console.log(e)
			}
		}

		window.addEventListener("cartchange", () => {
			loadIngredientsToCart()
		})

		loadIngredientsToCart()

		return () => {
			window.removeEventListener("cartchange", () => {
				loadIngredientsToCart()
			})
		}
	}, [])

	const isSomeIngredientsInCart = (
		cart: Item[],
		ingredientsToAdd: Ingredient[],
		recipeId: string,
	) => {
		return cart.some((cartItem) =>
			ingredientsToAdd.some(
				(ingredientToAdd) =>
					ingredientToAdd.ingredient === cartItem.ingredient &&
					cartItem.recipes.includes(recipeId),
			),
		)
	}

	const addToState = () => {
		try {
			const cart = getCartItems()
			const items = ingredientsList.map((elem: any) => ({
				...elem,
				recipes: [recipeId],
			}))
			if (isSomeIngredientsInCart(cart, ingredientsList, recipeId)) {
				remove(items, recipeId)
				setDisplayText("Añadir a la cesta")
			} else {
				addToListCart(items, recipeId)
				setDisplayText("Eliminar de la cesta")
			}
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<button
			className="underline duration-500 hover:scale-105 hover:transform"
			onClick={addToState}
		>
			{displayText}
		</button>
	)
}
