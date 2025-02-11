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
	}, [])

	function removeAllFromCart() {
		cleanAll()
		setIngredients([])
	}

	return (
		<>
			<button
				onClick={toggleMenu}
				className="fixed right-8 top-8 z-50 rounded-full bg-bgPrimary p-2 hover:scale-110 hover:transform"
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
			<aside
				className={`fixed inset-y-0 right-0 z-40 bg-bgSecondary transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} w-full sm:w-[60%] lg:w-[30%]`}
			>
				<div className="mt-10">
					<header>
						<h3 className="text-center text-xl uppercase">Cart</h3>
					</header>
					<section className="cart p-4">
						{
							<ul>
								{ingredients.map((ingredient) => {
									return (
										<li key={ingredient.ingredient}>
											{ingredient.ingredient} x {ingredient.quantity}
										</li>
									)
								})}
							</ul>
						}
					</section>
					<div className="mt-10 flex justify-center">
						<button
							className="rounded border-2 px-4 py-2"
							onClick={removeAllFromCart}
						>
							Borrar todo
						</button>
					</div>
				</div>
			</aside>
		</>
	)
}
