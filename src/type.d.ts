export interface Recipe {
  title: string;
  description: string;
  cookingTime: number;
  ingredients: string[];
  instructions: string[];
  picture: string;
  videoURL?: string;
}
