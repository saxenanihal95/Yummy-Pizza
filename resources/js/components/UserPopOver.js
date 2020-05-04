import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants";

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
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Link to={ROUTES.ORDERS}>My Orders</Link>
                        <a
                            onClick={() => {
                                logout();
                            }}
                        >
                            Logout
                        </a>
                    </div>
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
