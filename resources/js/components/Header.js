import React, { Component } from "react";
import {
    Layout,
    Drawer,
    Button,
    Badge,
    List,
    Avatar,
    Modal,
    Popover
} from "antd";

const { Header } = Layout;

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";
import Login from "./Login";
import Register from "./Register";

@inject("pizzaStore", "authStore")
@observer
export default class extends Component {
    constructor() {
        super();
        this.state = { visible: false, popOverVisible: false };
    }

    handleVisibleChange = popOverVisible => this.setState({ popOverVisible });

    hidePopOver = () => this.setState({ popOverVisible: false });

    showDrawer = () => this.setState({ visible: true });

    onClose = () => this.setState({ visible: false });

    render() {
        const { isAuthenticated } = this.props;
        const { cartList, total } = this.props.pizzaStore;
        const {
            modalVisible,
            isLogin,
            setModalVisible,
            user,
            logout
        } = this.props.authStore;
        const { name = "" } = user;
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
                    <Popover
                        content={
                            <a
                                onClick={() => {
                                    logout();
                                }}
                            >
                                Logout
                            </a>
                        }
                        trigger="click"
                        visible={this.state.popOverVisible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <UserOutlined
                            type="primary"
                            style={{ fontSize: 20, margin: "0px 10px" }}
                        />
                        {name}
                    </Popover>
                )}

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
                            !!total && (
                                <>
                                    <p>total: {total}</p>
                                    <Button
                                        style={{ width: "100%" }}
                                        onClick={() => {
                                            this.onClose();
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
                <Modal
                    visible={modalVisible}
                    footer={null}
                    title={isLogin ? "Login" : "Register"}
                    onCancel={() => setModalVisible(false)}
                >
                    {isLogin ? <Login /> : <Register />}
                </Modal>
            </Header>
        );
    }
}
