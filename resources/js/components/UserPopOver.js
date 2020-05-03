import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

@inject("pizzaStore", "authStore")
@observer
class UserPopOver extends Component {
    constructor() {
        super();
        this.state = { visible: false };
    }

    handleVisibleChange = visible => this.setState({ visible });

    render() {
        const { logout, user } = this.props.authStore;
        const { name = "" } = user;
        return (
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
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
            >
                <UserOutlined
                    type="primary"
                    style={{ fontSize: 20, margin: "0px 10px" }}
                />
                {name}
            </Popover>
        );
    }
}

export default UserPopOver;
