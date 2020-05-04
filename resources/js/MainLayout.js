import React, { Component } from "react";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import { Layout } from "antd";
import Header from "./components/Header";
import { inject, observer } from "mobx-react";
const { Content } = Layout;
import { Switch, Route } from "react-router-dom";

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
                <Content>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export default MainLayout;
