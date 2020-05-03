import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";

@inject("authStore")
@observer
class Login extends Component {
    render() {
        const { loginLoading, login, setIsLogin } = this.props.authStore;
        const onFinish = ({ email, password }) => {
            login({ email, password });
        };

        return (
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Email!"
                        }
                    ]}
                >
                    <Input
                        prefix={
                            <MailOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                        type="email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!"
                        }
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        loading={loginLoading}
                    >
                        Log in
                    </Button>
                    Or <a onClick={() => setIsLogin(false)}>register now!</a>
                </Form.Item>
            </Form>
        );
    }
}

export default Login;
