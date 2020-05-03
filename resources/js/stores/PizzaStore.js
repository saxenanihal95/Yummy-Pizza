import FetchBase from "../FetchBase";
import { observable } from "mobx";

export default class PizzaStore extends FetchBase {
    @observable pizzaList = [];
    @observable loading = true;
    @observable quantity = {};

    getPizzaList = async () => {
        try {
            const { data } = await this.get("pizza/list");
            this.pizzaList = data;
            this.pizzaList.forEach(({ id }) => (this.quantity[id] = 0));
            this.loading = false;
        } catch (e) {
            this.loading = false;
            console.log(e);
        }
    };

    addQuanity = id => (this.quantity[id] = this.quantity[id] + 1);
    removeQuantity = id => (this.quantity[id] = this.quantity[id] - 1);
}
