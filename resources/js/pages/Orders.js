import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { List, Card } from "antd";
import { toJS } from "mobx";
const { Meta } = Card;

@inject("pizzaStore")
@observer
class Orders extends Component {
    componentDidMount() {
        const { getOrderList } = this.props.pizzaStore;
        getOrderList();
    }
    render() {
        const {
            orderList: { orders },
            orderListLoading
        } = this.props.pizzaStore;
        console.log(toJS(orders));
        return (
            <List
                itemLayout="horizontal"
                loading={orderListLoading}
                dataSource={orders}
                renderItem={item => (
                    <div>
                        <h2>Order No {item.id}</h2>
                        <List.Item.Meta title={`total: ${item.total}`} />
                        <List
                            itemLayout="horizontal"
                            dataSource={item.pizzas}
                            renderItem={({
                                id,
                                image,
                                name,
                                price,
                                quantity,
                                pivot
                            }) => (
                                <List.Item>
                                    <Card
                                        cover={
                                            <img alt="pizza-img" src={image} />
                                        }
                                    >
                                        <Meta
                                            title={name}
                                            description={`${
                                                quantity > 0
                                                    ? price * quantity
                                                    : price
                                            } $`}
                                        />
                                        <div>quantity: {pivot.quantity}</div>
                                        <div>total: {pivot.total}</div>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </div>
                )}
            />
        );
    }
}

export default Orders;
