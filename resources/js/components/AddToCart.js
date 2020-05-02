import React, { useState } from "react";
import { Button } from "antd";

function AddToCart() {
    const [quantity, setQuantity] = useState(0);
    const addQuanity = () => setQuantity(quantity + 1);
    const removeQuantity = () => setQuantity(quantity - 1);

    if (quantity >= 1) {
        return (
            <div style={{ marginTop: 20, display: "flex" }}>
                <Button onClick={removeQuantity} style={{ flex: 1 }}>
                    -
                </Button>
                <p
                    style={{
                        flex: 1,
                        textAlign: "center",
                        margin: 0
                    }}
                >
                    {quantity}
                </p>
                <Button onClick={addQuanity} style={{ flex: 1 }}>
                    +
                </Button>
            </div>
        );
    }
    return (
        <Button onClick={addQuanity} style={{ marginTop: 20, width: "100%" }}>
            ADD TO CART
        </Button>
    );
}

export default AddToCart;
