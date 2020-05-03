import React, { Component } from "react";
import { Drawer, Button, List, Avatar } from "antd";
import { observer, inject } from "mobx-react";

@inject("pizzaStore")
@observer
class CartDrawer extends Component {
    render() {
        const { cartList, total } = this.props.pizzaStore;
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
                                        setModalVisible(true);
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
