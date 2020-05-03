import React, { Component } from "react";
import { List, Card } from "antd";
import axios from "axios";
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
                renderItem={item => (
                    <List.Item>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={item.image}
                                    style={{ height: 250 }}
                                />
                            }
                        >
                            <Meta title={item.name} />
                            <AddToCart id={item.id} />
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

export default App;
