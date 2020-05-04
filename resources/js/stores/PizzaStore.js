import FetchBase from "../FetchBase";
import { observable, computed } from "mobx";
import { openNotificationWithIcon } from "../utils/helpers";

export default class PizzaStore extends FetchBase {
    @observable pizzaList = [];
    @observable loading = true;
    @observable orderList = [];
    @observable orderListLoading = true;

    getPizzaList = async () => {
        try {
            const data = await this.get("pizza/list");
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

    order = async () => {
        const params = {
            total: this.total,
            pizza: this.pizzaList.filter(({ quantity }) => quantity)
        };
        try {
            const data = await this.post("order/new", { ...params });
            openNotificationWithIcon("success", data.message);
        } catch (e) {
            console.log(e);
        }
    };

    getOrderList = async () => {
        try {
            const data = await this.get("order/list");
            this.orderList = data;
            this.orderListLoading = false;
        } catch (e) {
            console.log(e);
            this.orderListLoading = false;
        }
    };

    @computed get total() {
        return this.pizzaList
            .filter(({ quantity }) => quantity)
            .map(({ price, quantity }) => price * quantity)
            .reduce((prev, curr) => prev + curr, 0);
    }
}
