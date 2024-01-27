import { category, item, waAPI } from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = false; // PHONE NUMBER
item.currency = "pt-br"; // LOCALE CURRENCY

category.add("Almoço", "lanches");
item.add("X-Salada", "lorem ipsum dolor sit amet arcu.", 10.00, "almo1.png", "lanches");
item.add("X-Tudo", "lorem ipsum dolor sit amet arcu.", 18.00, "almo1.png", "lanches");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches");

category.add("Jantar", "lanches2");
item.add("X-Salada", "lorem ipsum dolor sit amet arcu.", 10.00, "almo1.png", "lanches2");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 25.00, "almo1.png", "lanches2");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 25.00, "almo1.png", "lanches2");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 22.00, "almo1.png", "lanches2");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 20.00, "almo1.png", "lanches2");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 19.00, "almo1.png", "lanches2");

category.add("Bebidas", "lanches3");
item.add("X-Salada", "suco de polpa.", 10.00, "suco-de-frutas.png", "lanches3");
item.add("X-Tudo", "suco com leite.", 18.00, "almo1.png", "lanches3");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 22.90, "R.png", "lanches3"  );
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 24.00, "chupeta.png", "lanches3");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 27.00, "chupeta.png", "lanches3");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 21.00, "almo1.png", "lanches3");