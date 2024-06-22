import type { Recipe } from "../../type";

export const quesadillaRecipe: Recipe = {
  title: "Quesadillas de pollo",
  cookingTime: 60,
  ingredients: [
    {
      title: "Marinado",
      ingredients: [
        "pimienta",
        "30ml de salsa de soja",
        "15ml de salsa inglesa",
        "una lima",
        "pimentón picante",
        "1ª cucharilla de comino molido",
        "1ª cucharilla de glutamato monosódico",
        "30ml de aceite de girasol",
      ],
    },
    {
      ingredients: [
        "200g Queso gruyere",
        "200g  Queso cheddar",
        "100g Queso curado de oveja",
        "1 pechuga de pollo",
        "Tortillas de trigo",
        "Jalapeños encurtidos",
      ],
    },
  ],
  steps: [
    {
      title: "Marinar el pollo",
      steps: [
        "Envolvemos la pechuga de pollo con un plástico o una bolsa y lo martilleamos con un martillo de cocina o un cazo, hasta que quede con el mismo grosor en todas sus partes.",
        "Salpimentamos al gusto.",
        "En un recipiente añadir el pollo",
        "Añadir la salsa de soja.",
        "Añadir la salsa ingles.",
        "Añadir el zumo de una lima.",
        "Añadir el pimentón picante.",
        "Añadir el comino molido.",
        "Añadir el glutamato monosódico (opcional)",
        "Añadir el aceite de girasol.",
        "Dejamos marinando el pollo en la nevera un mínimo de 30 minutos",
      ],
    },
    {
      title: "Cocinar el pollo",
      steps: [
        "Pre-calentamos el horno en modo grill a máxima potencia.",
        "Una vez marinado cubrimos una bandeja de horno con papel de aluminio y colocamos las pechugas de pollo.",
        "Cocinamos las pechugas durante 5 minutos",
        "Damos la vuelta a las pechugas y las dejamos cocinándose 4 minutos mas",
        "Las pechugas están listas cuando en su punto más grueso registran una temperatura de 65ºC",
        "Las transferimos a una rendija para dejar que se enfríen un poco",
        "cortamos las pechugas en cubitos",
      ],
    },
    {
      title: "Quesadilla",
      steps: [
        "Hacer ralladuras gruesas con los quesos y mezclaros",
        "En una tortilla poner una primera capa con la mezcla de quesos",
        "Añadir los cubitos de pollo que queramos",
        "Añadir jalapeños encurtidos troceados",
        "Añadir más queso por encima y cerrar la tortilla presionando bien.",
        "Añadir abundante aceite de girasol a una sartén a fuego medio",
        "Una vez caliente colocamos la quesadilla y la movemos por la superficie de la sartén para embadurnado con el aceite.",
        "Colocamos algo de peso encima de la quesadilla y dejamos que se haga por 1 minuto y medio.",
        "Le damos la vuelta y la dejamos cocinarse durante otro minuto y medio.",
      ],
    },
  ],
  videoId: "qoeCvcE-gKY",
  picture: "/quesadilla-pollo.jpg",
};
