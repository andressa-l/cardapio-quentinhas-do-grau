import { category, item, waAPI } from "./main.js";

// waAPI.countryCode = 55; // COUNTRY CODE
// waAPI.number = false; // PHONE NUMBER
// item.currency = "pt-br"; // LOCALE CURRENCY

category.add("Almoço", "lanches");
item.add("Tradicional da Casa", "Arroz, feijão, carne e salada.", 10.00, "almo1.png", "lanches");
item.add("Macarrão ao molho", "Macarrão com carne moída", 18.00, "almo1.png", "lanches");
item.add("Especial da Casa", "Escolha o prato do dia", 20.00, "almo1.png", "lanches");
item.add("Fricassê", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches");
item.add("Lasanha de frigideira", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches");
item.add("Frango Cremoso", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches");

category.add("Jantar", "lanches2");
item.add("Macarronada", "lorem ipsum dolor sit amet arcu.", 10.00, "almo1.png", "lanches2");
item.add("Yakisoba", "lorem ipsum dolor sit amet arcu.", 25.00, "almo1.png", "lanches2");
item.add("Caldo verde", "lorem ipsum dolor sit amet arcu.", 25.00, "almo1.png", "lanches2");
item.add("Sopa de legumes", "lorem ipsum dolor sit amet arcu.", 22.00, "almo1.png", "lanches2");
item.add("Caldo de kenga", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches2");
item.add("Batata recheada", "lorem ipsum dolor sit amet arcu.", 19.00, "almo1.png", "lanches2");

category.add("Bebidas", "lanches3");
item.add("Cervejas", "suco de polpa.", 10.00, "suco-de-frutas.png", "lanches3");
item.add("Cachaça", "suco com leite.", 18.00, "almo1.png", "lanches3");
item.add("Coca-cola", "lorem ipsum dolor sit amet arcu.", 22.90, "R.png", "lanches3"  );
item.add("Guaraná", "lorem ipsum dolor sit amet arcu.", 24.00, "chupeta.png", "lanches3");
item.add("Água", "lorem ipsum dolor sit amet arcu.", 27.00, "chupeta.png", "lanches3");
item.add("Sucos Naturais", "lorem ipsum dolor sit amet arcu.", 21.00, "almo1.png", "lanches3");

category.add("Sobremesas", "lanches4");
item.add("Sobremesa gelada de chocolate", "suco de polpa.", 10.00, "suco-de-frutas.png", "lanches4");
item.add("Torta de limão", "suco com leite.", 18.00, "almo1.png", "lanches4");
item.add("Pudim de leite condensado", "lorem ipsum dolor sit amet arcu.", 22.90, "R.png", "lanches4"  );
item.add("Mousse de maracujá", "lorem ipsum dolor sit amet arcu.", 24.00, "chupeta.png", "lanches4");
item.add("Cheesecake de morango no pote", "lorem ipsum dolor sit amet arcu.", 27.00, "chupeta.png", "lanches4");
item.add("Torta de banana com chocolate aerado", "lorem ipsum dolor sit amet arcu.", 21.00, "almo1.png", "lanches4");
