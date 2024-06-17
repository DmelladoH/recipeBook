export interface Recipe {
  title: string;
  description: string;
  cookingTime: number;
  ingredients: IngredientGroup[];
  steps: stepsGroup[];
  picture: string;
  videoURL?: string;
}

export interface IngredientGroup {
  title?: string;
  ingredients: string[];
}

export interface stepsGroup {
  title?: string;
  steps: string[];
}
