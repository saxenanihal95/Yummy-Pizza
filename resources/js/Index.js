import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Card, Button } from "antd";
import { SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import axios from "axios";

const { Meta } = Card;

function App() {
    const [pizza, setPizza] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(true);

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
                        <Button
                            onClick={() => setShow(!show)}
                            style={{ marginTop: 20, width: "100%" }}
                        >
                            ADD TO CART
                        </Button>
                    </Card>
                </List.Item>
            )}
        />
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
