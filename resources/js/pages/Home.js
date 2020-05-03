import React, { Component } from "react";
import { List, Card } from "antd";
import AddToCart from "../components/AddToCart";
import { inject, observer } from "mobx-react";

const { Meta } = Card;

@inject("pizzaStore")
@observer
class App extends Component {
    componentDidMount() {
        this.props.pizzaStore.getPizzaList();
    }

    render() {
        const { loading, pizzaList } = this.props.pizzaStore;
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={pizzaList}
                loading={loading}
                renderItem={({ id, image, name, price, quantity }) => (
                    <List.Item>
                        <Card
                            cover={
                                <img
                                    alt="pizza-img"
                                    src={image}
                                    style={{ height: 250 }}
                                />
                            }
                        >
                            <Meta
                                title={name}
                                description={`${
                                    quantity > 0 ? price * quantity : price
                                } $`}
                            />
                            <AddToCart id={id} quantity={quantity} />
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

export default App;
