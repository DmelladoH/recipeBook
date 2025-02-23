import { useEffect, useState } from "react"
import { addToListCart, getCartItems, remove } from "../store"
import type { IngredientGroup, ItemTuple } from "../type"

interface Props {
	recipeId: string
	ingredients: IngredientGroup[]
}

export function AddToCartButton({ ingredients, recipeId }: Props) {
	const [displayText, setDisplayText] = useState<string | undefined>()

	const ingredientsList = ingredients
		.flatMap((elem) => elem.ingredients)
		.map((elem: ItemTuple) => {
			return { ingredient: elem[0], quantity: elem[1] ? elem[1] : 1 }
		})

	useEffect(() => {
		const cart = getCartItems()
		if (isSomeIngredientsInCart(cart, ingredientsList, recipeId)) {
			setDisplayText("Eliminar del carro")
		} else {
			setDisplayText("Añadir al carro")
		}
	}, [])

	const isSomeIngredientsInCart = (
		cart: any[],
		ingredientsToAdd: any[],
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
		const cart = getCartItems()
		const items = ingredientsList.map((elem: any) => ({
			...elem,
			recipes: [recipeId],
		}))

		if (isSomeIngredientsInCart(cart, ingredientsList, recipeId)) {
			remove(items, recipeId)
			setDisplayText("Añadir al carro")
		} else {
			addToListCart(items, recipeId)
			setDisplayText("Eliminar del carro")
		}
	}

	return <button onClick={addToState}>{displayText}</button>
}
