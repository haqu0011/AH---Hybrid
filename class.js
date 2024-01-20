import Main from "./main";

const top = new Main(false, "onion", "lettuce", "tomato", "beef");


top.isVeggie();
console.log(top.toppings);
Main.cookBurger(top);
