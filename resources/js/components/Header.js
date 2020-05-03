import React, { Component } from "react";
import { Layout, Button, Badge } from "antd";

const { Header } = Layout;

import { ShoppingCartOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";

import UserPopOver from "./UserPopOver";
import CartDrawer from "./CartDrawer";
import AuthModal from "./AuthModal";

@inject("pizzaStore", "authStore")
@observer
export default class extends Component {
    constructor() {
        super();
        this.state = { visible: false };
    }

    showDrawer = () => this.setState({ visible: true });

    onClose = () => this.setState({ visible: false });

    render() {
        const { cartList } = this.props.pizzaStore;
        const { setModalVisible, isAuthenticated } = this.props.authStore;
        return (
            <Header
                style={{
                    display: "flex",
                    backgroundColor: "#D3D3D3",
                    alignItems: "center"
                }}
            >
                <p style={{ fontSize: 18, flex: 1, margin: 0 }}>Yummy Pizza</p>

                <Badge count={cartList.length}>
                    <ShoppingCartOutlined
                        style={{ fontSize: 30 }}
                        onClick={this.showDrawer}
                    />
                </Badge>

                {!isAuthenticated ? (
                    <Button
                        onClick={() => setModalVisible(true)}
                        style={{ margin: "0px 10px" }}
                    >
                        Login
                    </Button>
                ) : (
                    <UserPopOver />
                )}

                <CartDrawer
                    visible={this.state.visible}
                    onClose={this.onClose}
                />

                <AuthModal />
            </Header>
        );
    }
}
