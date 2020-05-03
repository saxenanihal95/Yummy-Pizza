import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import Store from "./stores";
import { Provider } from "mobx-react";

import MainLayout from "./MainLayout";

function App() {
    return (
        <Provider {...new Store()}>
            <MainLayout />
        </Provider>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
