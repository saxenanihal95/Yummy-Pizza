import React, { Component } from "react";
import { Drawer, Button, List, Avatar } from "antd";
import { observer, inject } from "mobx-react";

@inject("pizzaStore", "authStore")
@observer
class CartDrawer extends Component {
    render() {
        const { cartList, total, order } = this.props.pizzaStore;
        const { isAuthenticated, setModalVisible } = this.props.authStore;
        const { onClose, visible } = this.props;
        return (
            <Drawer
                title="Cart"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={cartList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.image} />}
                                title={item.name}
                                description={`quantity: ${item.quantity}`}
                            />
                        </List.Item>
                    )}
                    footer={
                        !!total && (
                            <>
                                <p>total: {total}</p>
                                <Button
                                    style={{ width: "100%" }}
                                    onClick={() => {
                                        onClose();
                                        !isAuthenticated
                                            ? setModalVisible(true)
                                            : order();
                                    }}
                                >
                                    Checkout
                                </Button>
                            </>
                        )
                    }
                />
            </Drawer>
        );
    }
}

export default CartDrawer;
