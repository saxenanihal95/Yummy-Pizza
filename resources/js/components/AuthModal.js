import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Login from "./Login";
import Register from "./Register";
import { Modal } from "antd";

@inject("authStore")
@observer
class AuthModal extends Component {
    render() {
        const { modalVisible, isLogin, setModalVisible } = this.props.authStore;
        return (
            <Modal
                visible={modalVisible}
                footer={null}
                title={isLogin ? "Login" : "Register"}
                onCancel={() => setModalVisible(false)}
            >
                {isLogin ? <Login /> : <Register />}
            </Modal>
        );
    }
}

export default AuthModal;
