import Burger from "./f38f884d1b73af1b997b943769376608/burger";


// const t1 = ["beef"];
// const t2 = ["tomato", "lettuce", "cheese"];
// const toppings = ["...t2", "...t2", "...t2", "...t1",];

class TopList extends Burger {


    constructor(topping, step) {
        this.topping;
        this.step;
        const t1 = ["beef"];
        const t2 = ["tomato", "lettuce", "onion"];
        const toppings = ["...t2", "...t2", "...t2", "...t1",];
    }


    
    place() {
        console.log(`The ${this.topping} is needed on the burger`);
    }
}

class Meat extends TopList {

    constructor(topping, step) {
        super(topping, step);
      
    }

    animal() {
        console.log(`The ${this.t1} is placed on the burger`);
    }

}

class Veggie extends TopList {
    constructor(topping, step) {
        super(topping, step);
        
    }

    veggies() {
        console.log(`The ${this.t2} is placed on the burger`);
    }

}

const meat = new Meat("meat", 'beef', 1);
const veggie = new Veggie("veggie", 'tomato', 'onion', 2);

// console.log(meat.topping.step);
// console.log(veggie.topping.step);

meat.animal();
Veggie.veggies();

export default TopList;

