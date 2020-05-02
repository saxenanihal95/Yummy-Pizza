import React, { useEffect, useState } from "react";
import { List, Card } from "antd";
import axios from "axios";
import AddToCart from "../components/AddToCart";

const { Meta } = Card;

function App() {
    const [pizza, setPizza] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPizzaList = async () => {
        try {
            const pizza = await axios.get("api/pizza/list");
            setPizza(pizza.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPizzaList();
    }, []);

    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={pizza}
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
                        <AddToCart />
                    </Card>
                </List.Item>
            )}
        />
    );
}

export default App;
