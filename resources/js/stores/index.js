import PizzaStore from "./PizzaStore";
import AuthStore from "./AuthStore";

export default class RootStore {
    constructor() {
        this.pizzaStore = new PizzaStore(this);
        this.authStore = new AuthStore(this);
    }
}
