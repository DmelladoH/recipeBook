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
	ingredients: any[]
}

export interface StepsGroup {
	title?: string
	steps: string[]
}

export interface Item {
	recipes: string[]
	ingredient: string
	quantity: number
}
export interface RecipeWithId extends Recipe {
	id: string
}

export type ItemTuple = [string, number | null | undefined]

export type Unit = "g" | "ml" | "pcs"
