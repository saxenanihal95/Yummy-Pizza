import React, { Component } from "react";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import { Layout } from "antd";
import Header from "./components/Header";
import { inject, observer } from "mobx-react";
const { Content } = Layout;

@inject("authStore")
@observer
class MainLayout extends Component {
    componentDidMount() {
        const { isAuthenticated, getAuthenticatedUser } = this.props.authStore;
        if (isAuthenticated) getAuthenticatedUser();
    }

    render() {
        const { isAuthenticated } = this.props.authStore;
        return (
            <Layout>
                <Header isAuthenticated={isAuthenticated} />
                <Content>
                    <Home />
                </Content>
            </Layout>
        );
    }
}

export default MainLayout;
