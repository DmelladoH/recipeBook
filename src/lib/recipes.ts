import type { RecipeWithId } from "../type";

export const recipes: RecipeWithId[] = [
  {
    id: "parmesan-risotto",
    title: "Parmesan Risotto",
    description:
      "El risotto de arroz con mantequilla y queso Parmigiano Reggiano es un exquisito plato italiano que destaca por su cremosidad y sabor. Comienza tostando el arroz en una cazuela con un toque de mantequilla, realzando su aroma y textura. Luego, se va agregando agua caliente poco a poco, permitiendo que el arroz absorba lentamente el líquido, cocinándose hasta alcanzar una consistencia tierna y cremosa. ",
    cookingTime: 30,
    ingredients: [
      {
        ingredients: [
          "320g arroz",
          "agua",
          "80g de mantequilla fría",
          "150g de parmigiano reggiano",
          "salt al gusto",
          "pimienta negra recién molida",
        ],
      },
    ],
    steps: [
      {
        steps: [
          "Poner cazuela al fuego",
          "Poner el arroz en la cazuela para iniciar la tostatura. (seco, solo el arroz al fuego)",
          "Añadir sal y piemienta durante la tostatura",
          "La tostatura termina cuando con la mano no puedes tocar el arroz por que esta caliente",
          "Se añade agua hirviendo poco a poco, intentando mantener el arroz siempre cubierto por el líquido",
          "Una vez el arroz este cocinado retiramos la cazuela del fuego",
          "Integramos la mantequilla fria e iniciamos la mantecatura",
          "“Onda” para mantecar y para introducir aire",
          "Una vez la mantequilla este completamente disuelta añadimos el queso y lo integramos bien",
        ],
      },
    ],

    videoId: "ANZTOPW_j7k",
    picture: "/parmesan-risotto.jpg",
  },
  {
    id: "cuscus-con-carne-picada",
    title: "Cuscus de carne picada",
    cookingTime: 30,
    ingredients: [
      {
        title: "Cuscus",
        ingredients: [
          "1 taza cuscus",
          "1 taza caldo de ave",
          "una cucharada de comino",
          "sal al gusto",
        ],
      },
      {
        title: "Carne Picada",
        ingredients: [
          "400g de carne picada",
          "250g de tomate triturado",
          "Una cebolla morada",
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
        ],
      },
      {
        ingredients: ["Queso fetta", "Perejil fresco picado"],
      },
    ],
    steps: [
      {
        title: "Carne picada",
        steps: [
          "Cortamos una cebolla morada en dados y la rehogamos con aceita, le añadimos sal.",
          "Añadimos la carne picada y la cocinamos, esperando a que quede dorada",
          "Añadimos el tomate triturado y lo cocinamos con la carne",
          "salpimentamos al gusto",
        ],
      },
      {
        title: "Cuscus",
        steps: [
          "Para el cuscus ponemos a hervir la taza de caldo de pollo, le añadimos una cucharada de comino y sal",
          "Una vez el caldo es hirviendo, echamos el cuscus en un bol y le vertimos el caldo hirviendo. Lo tapamos durante 5 minutos",
        ],
      },
      {
        title: "Salsa",
        steps: [
          "En un bol añadimos el yogur griego natural",
          "Añadimos una cucharada de ajo picado",
          "Añadimos una cucharada de eneldo",
          "Añadimos una cucharada de comino",
          "Añadimos una cucharada de pepinillos encurtidos en trozos pequeños",
          "Añadimos un chorro de aceite de oliva",
          "Añadimos sal",
          "Por último un chorro de limón y removemos bien.",
        ],
      },
      {
        title: "Emplatado",
        steps: [
          "Una capa de cuscus",
          "La carne picada por encima",
          "Añadimos la salsa de yogur",
          "Trozos de queso feta",
          "Perejil fresco picado",
        ],
      },
    ],
    videoId: "IO4Z0anzIog",
    picture: "/cuscus-carne-picada.jpg",
  },
  {
    id: "quesadilla-pollo",
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
  },
  {
    id: "albondigas-con-curry",
    title: "Albóndigas con curry",
    cookingTime: 60,
    ingredients: [
      {
        title: "Arroz",
        ingredients: [
          "200g de arroz basmati",
          "300ml de agua",
          "estrella de anís",
        ],
      },
      {
        title: "Salsa curry",
        ingredients: [
          "20g de jenjibre",
          "3 dientes de ajo",
          "2 rebollas rojas",
          "4 tomates",
          "1 rama citronela",
          "200ml caldo de pollo",
          "400ml leche de coco",
        ],
      },
      {
        title: "Albóndigas",
        ingredients: [
          "600g de carne picada",
          "sal y pimienta",
          "yogur griepo",
          "Albahaca fresca",
          "Anacardos picados",
          "cilantro",
        ],
      },
    ],
    steps: [
      {
        title: "Arroz",
        steps: [
          "Colocamos los 200g de arroz a un cuenco y lo lavamos con agua fría para retirar el almidón hasta que el agua salga clara",
          "Vertimos una parte y media del agua en el cuenco (300ml de agua)",
          "Dejamos hidratar el arroz durante 30 minutos",
          "Una vez hidratado, vertimos el arroz con el agua en una cazuela y añadimos sal y anís estrellado",
          "Dejamos que el agua hierva y bajamos el fuego al mínimo, tapamos la cazuela y dejamos cocinar durante 15 minutos",
          "Dejar reposando 10 minutos con la tapa puesta",
        ],
      },
      {
        title: "Salsa curry",
        steps: [
          "Cortamos los 20g de jenjibre ya pelado en trozos pequeños",
          "Picamos 3 dientes de ajo",
          "Cortamos 2 cebollas moradas en julianas",
          "Cortamos 4 tomates en cuartos",
          "Aplastamos y troceamos la rama de citronela",
          "Para el sofrito añadimos mantequilla clarificada (ghee) a una cazuela y la calentamos",
          "Tostamos el jenjibre y el ajo",
          "Una vez dorados añadimos las cebollas y la salamos",
          "Añadimos la pasta de curry y la integramos bien",
          "Añadimos los tomates y la citronela",
          "Añadimos el caldo de pollo",
          "Una vez el caldo este hirviendo añadimos la leche de coco",
          "Dejamos reducir hasta que tenga una textura cremosa",
          "trituramos la mezcla, hasta que no queden trozos y quede lisa",
        ],
      },
      {
        title: "Albóndigas",
        steps: [
          "En un bol añadimos la carne picada y salpimentamos al gusto",
          "Mezclamos y masajeamos la mezcla para que se integren bien los sabores",
          "Trabajamos la carne para bolearla hasta que quede fina y hacer albóndigas pequeñas",
          "En una sartén caliente añadimos aceite de oliva y marcamos las albóndigas, movemos la sartén para que se doren por todos los lados",
          "Una vez doradas las añadimos a una cazuela con la salsa de curry y cocinamos hasta que la salsa haya reducido",
        ],
      },
      {
        title: "Emplatado",
        steps: [
          "Colocamos una base de arroz",
          "Añadimos las albóndigas con la salsa por encima",
          "Añadimos yogur griego",
          "Añadimos albahaca fresca",
          "Añadimos anacardos picados",
          "Añadimos cilantro",
        ],
      },
    ],
    videoId: "8A78CHESj2k",
    picture: "/albondigas-con-curry.jpg",
  },
];
