import type { Recipe } from "../../type";

export const cuscusConCarnePicada: Recipe = {
  title: "Cuscus de carne picada",
  cookingTime: 30,
  ingredients: [
    {
      title: "Cuscus",
      ingredients: [
        "1 taza cuscus",
        "1 taza caldo de ave",
        "una cucharada de comino",
      ],
    },
    {
      title: "Carne Picada",
      ingredients: [
        "400g de carne picada",
        "250g de tomate triturado",
        "Una cebolla roja",
      ],
    },
    {
      title: "Salsa",
      ingredients: [
        "Yogur griego natural",
        "Ajo picado",
        "Eneldo",
        "Pepinillos encurtidos",
        "Aceite de oliva",
        "Limón",
        "Perejil picado",
      ],
    },
    {
      ingredients: ["Sal", "Queso fetta"],
    },
  ],
  steps: [
    {
      title: "Carne picada",
      steps: [
        "Cortamos una cebolla roja en dados y la rehogamos con aceita, le añadimos sal.",
        "Añadimos la carne picada y la cocinamos, esperando a que quede dorada",
        "Añadimos el tomate triturado y lo cocinamos con la carne",
        "salpimentamos al gusto",
      ],
    },
    {
      title: "Cuscus",
      steps: [
        "Para el cuscus ponemos a hervir la taza de caldo de pollo, le añadimos una cucharada de comino y sal",
        "Una vez el caldo es hirviendo lo vertemos a un bol, le echamos el cuscus y lo tapamos durante 5 minutos",
        "En un bol añadimos el yogur griego natural",
        "Añadimos una cucharada de ajo picado",
        "Añadimos una cucharada de eneldo",
        "Añadimos una cucharada de comino",
        "Añadimos una cucharada de pepinillos encurtidos",
        "Añadimos un chorro de aceite de oliva",
        "Añadimos sal",
        "Por último un chorro de limón y removemos bien.",
      ],
    },
    {
      title: "Emplatado",
      steps: [
        "Para emplatar: ",
        "Una capa de cuscus",
        "La carne picada por encima",
        "Añadimos la salsa de yogur",
        "Trozos de queso feta",
        "Perejil picado",
      ],
    },
  ],
  videoId: "IO4Z0anzIog",
  picture: "/cuscus-carne-picada.jpg",
};
