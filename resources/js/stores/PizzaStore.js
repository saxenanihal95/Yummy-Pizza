import FetchBase from "../FetchBase";
import { observable, computed, toJS } from "mobx";

export default class PizzaStore extends FetchBase {
    @observable pizzaList = [];
    @observable loading = true;

    getPizzaList = async () => {
        try {
            const { data } = await this.get("pizza/list");
            this.pizzaList = data.map(pizza => ({ ...pizza, quantity: 0 }));
            this.loading = false;
        } catch (e) {
            this.loading = false;
        }
    };

    addQuanity = updateId =>
        (this.pizzaList = this.pizzaList.map(({ id, quantity, ...rest }) =>
            id === updateId
                ? { ...rest, id, quantity: quantity + 1 }
                : { ...rest, id, quantity }
        ));

    removeQuantity = updateId =>
        (this.pizzaList = this.pizzaList.map(({ id, quantity, ...rest }) =>
            id === updateId
                ? { ...rest, id, quantity: quantity - 1 }
                : { ...rest, id, quantity }
        ));

    @computed get cartList() {
        return this.pizzaList.filter(({ quantity }) => quantity);
    }

    @computed get total() {
        return this.pizzaList
            .filter(({ quantity }) => quantity)
            .map(({ price, quantity }) => price * quantity)
            .reduce((prev, curr) => prev + curr, 0);
    }
}
