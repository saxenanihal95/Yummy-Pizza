import React, { Component } from "react";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import { Layout } from "antd";
import Header from "./components/Header";
import { inject, observer } from "mobx-react";
const { Content } = Layout;
import { Switch, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import { ROUTES } from "./utils/constants";

@inject("authStore")
@observer
class MainLayout extends Component {
    componentDidMount() {
        const { isAuthenticated, getAuthenticatedUser } = this.props.authStore;
        if (isAuthenticated) getAuthenticatedUser();
    }

    render() {
        return (
            <Layout>
                <Header />
                <Content style={{ margin: "0px 20px" }}>
                    <Switch>
                        <Route path={ROUTES.ORDERS}>
                            <Orders />
                        </Route>
                        <Route path={ROUTES.HOME}>
                            <Home />
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export default MainLayout;
