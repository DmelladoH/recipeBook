import { useEffect, useState } from "react"
import { cleanAll, getCartItems } from "../store"
import type { Item } from "../type"

export default function CartMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const [ingredients, setIngredients] = useState<Item[]>([])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		window.addEventListener("cartchange", () => {
			loadIngredientsToCart()
		})

		function loadIngredientsToCart() {
			const ingredient = getCartItems()
			setIngredients(ingredient)
		}

		loadIngredientsToCart()

		return () => {
			window.removeEventListener("cartchange", () => {
				loadIngredientsToCart()
			})
		}
	}, [])

	function removeAllFromCart() {
		cleanAll()
		setIngredients([])
	}

	return (
		<>
			<CartButton toggleMenu={toggleMenu} isOpen={isOpen} />
			<aside
				className={`bg-bg-secondary fixed inset-y-0 right-0 z-40 overflow-scroll transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} w-full sm:w-[60%] lg:w-[30%]`}
			>
				<div className="mt-10">
					<header className="px-5">
						<h3 className="text-lg font-semibold">Cesta de la compra</h3>
					</header>
					<section className="cart mt-10 p-4">
						{ingredients.length > 0 ? (
							<IngredientList ingredients={ingredients} />
						) : (
							<p className="text-center">La cesta esta vacia</p>
						)}
					</section>
					<div className="mt-10 flex justify-center">
						{ingredients.length > 0 && (
							<button
								className="rounded border-2 px-4 py-2"
								onClick={removeAllFromCart}
							>
								Borrar todo
							</button>
						)}
					</div>
				</div>
			</aside>
		</>
	)
}

function IngredientList({ ingredients }: { ingredients: Item[] }) {
	return (
		<ul className="grid gap-1">
			{ingredients.map((ingredient) => {
				return (
					<li key={ingredient.ingredient}>
						{ingredient.ingredient} x {ingredient.quantity} {ingredient.unit}
					</li>
				)
			})}
		</ul>
	)
}

function CartButton({
	toggleMenu,
	isOpen,
}: {
	toggleMenu: () => void
	isOpen: boolean
}) {
	return (
		<button
			onClick={toggleMenu}
			className="bg-bg-primary fixed top-8 right-8 z-50 rounded-full p-2 duration-500 hover:scale-105 hover:transform"
			aria-controls="cart-menu"
			aria-expanded={isOpen}
		>
			<span className="sr-only">Open Cart</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="m15 11-1 9"></path>
				<path d="m19 11-4-7"></path>
				<path d="M2 11h20"></path>
				<path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"></path>
				<path d="M4.5 15.5h15"></path>
				<path d="m5 11 4-7"></path>
				<path d="m9 11 1 9"></path>
			</svg>
		</button>
	)
}
