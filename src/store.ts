import type { Item } from "./type"

export async function getCartItems(): Promise<Item[]> {
	const data = await localStorage.getItem("cart")
	if (!data) return []
	return await JSON.parse(data)
}

export async function addToListCart(list: Item[], recipeId: string) {
	try {
		const currentCart = await getCartItems()

		list.map((elem) => {
			const elemInList = currentCart.find(
				(a) => a?.ingredient === elem.ingredient,
			)
			if (elemInList && elem.quantity) {
				elemInList.quantity += elem.quantity
				elemInList.recipes.push(recipeId)
			} else {
				const newItem = {
					...elem,
					recipes: [recipeId],
				}
				currentCart.push(newItem)
			}
		})
		localStorage.setItem("cart", JSON.stringify(currentCart))
		window.dispatchEvent(new Event("cartchange"))
	} catch (e) {
		console.log(e)
	}
}

export async function remove(list: Item[], recipeId: string) {
	try {
		const currentCart = await getCartItems()
		list.forEach((elem) => {
			const elemInList = currentCart.find(
				(a) => a?.ingredient === elem.ingredient,
			)
			if (elemInList) {
				if (elem.quantity) {
					elemInList.quantity -= elem.quantity
					elemInList.recipes = elemInList.recipes.filter((a) => a !== recipeId)
				}
				if (elemInList.quantity <= 0 || elemInList.quantity == null) {
					const index = currentCart.indexOf(elemInList)
					if (index > -1) {
						currentCart.splice(index, 1)
					}
				}
			}
		})

		localStorage.setItem("cart", JSON.stringify(currentCart))
		window.dispatchEvent(new Event("cartchange"))
	} catch (e) {
		console.log(e)
	}
}

export async function cleanAll() {
	localStorage.removeItem("cart")
	window.dispatchEvent(new Event("cartchange"))
}
