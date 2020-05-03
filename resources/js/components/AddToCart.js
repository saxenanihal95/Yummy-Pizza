import React, { useState, Component } from "react";
import { Button } from "antd";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

@inject("pizzaStore")
@observer
class AddToCart extends Component {
    // const [quantity, setQuantity] = useState(0);
    // const addQuanity = () => setQuantity(quantity + 1);
    // const removeQuantity = () => setQuantity(quantity - 1);

    render() {
        const { quantity, addQuanity, removeQuantity } = this.props.pizzaStore;
        const { id } = this.props;
        console.log(toJS(quantity));
        if (quantity[id] >= 1) {
            return (
                <div style={{ marginTop: 20, display: "flex" }}>
                    <Button
                        onClick={() => removeQuantity(id)}
                        style={{ flex: 1 }}
                    >
                        -
                    </Button>
                    <p
                        style={{
                            flex: 1,
                            textAlign: "center",
                            margin: 0
                        }}
                    >
                        {quantity[id]}
                    </p>
                    <Button onClick={() => addQuanity(id)} style={{ flex: 1 }}>
                        +
                    </Button>
                </div>
            );
        }
        return (
            <Button
                onClick={() => addQuanity(id)}
                style={{ marginTop: 20, width: "100%" }}
            >
                ADD TO CART
            </Button>
        );
    }
}

export default AddToCart;
