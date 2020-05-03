import React, { Component } from "react";
import { Layout, Drawer, Button } from "antd";

const { Header } = Layout;
import { List, Avatar } from "antd";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { inject } from "mobx-react";
import { toJS } from "mobx";

@inject("pizzaStore")
export default class extends Component {
    constructor() {
        super();
        this.state = { visible: false };
    }

    showDrawer = () => {
        this.setState({
            visible: true
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const { cartList, total } = this.props.pizzaStore;
        console.log(total);
        return (
            <Header
                style={{
                    display: "flex",
                    backgroundColor: "#D3D3D3",
                    alignItems: "center"
                }}
            >
                <p style={{ fontSize: 18, flex: 1, margin: 0 }}>Yummy Pizza</p>
                <ShoppingCartOutlined
                    style={{ fontSize: 30 }}
                    onClick={this.showDrawer}
                />

                <Drawer
                    title="Cart"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
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
                            <Button style={{ width: "100%" }}>Checkout</Button>
                        }
                    />
                </Drawer>
            </Header>
        );
    }
}
