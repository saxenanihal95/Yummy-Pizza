import PizzaStore from "./PizzaStore";

export default class RootStore {
    constructor() {
        this.pizzaStore = new PizzaStore(this);
    }
}
