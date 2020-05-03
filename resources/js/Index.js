import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import Store from "./stores";
import { Provider } from "mobx-react";
import { Layout } from "antd";

import Header from "./components/Header";

const { Content } = Layout;

function App() {
    return (
        <Provider {...new Store()}>
            <Layout>
                <Header />
                <Content>
                    <Home />
                </Content>
            </Layout>
        </Provider>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
