export interface Recipe {
	title: string
	description?: string
	cookingTime: number
	ingredients: IngredientGroup[]
	steps: stepsGroup[]
	picture: string
	videoId?: string
}

export interface IngredientGroup {
	title?: string
	ingredients: ItemTuple[]
}

export interface StepsGroup {
	title?: string
	steps: string[]
}

export interface Item {
	recipes: string[]
	ingredient: string
	quantity: number
	unit?: Unit
}
export interface RecipeWithId extends Recipe {
	id: string
}

export type ItemTuple = [
	string,
	number | null | undefined,
	Unit | null | undefined,
]

export interface Ingredient {
	ingredient: string
	quantity: number
	unit: Unit | null | undefined
}
export type Unit = "g" | "ml" | "pcs" | "cucharada"
