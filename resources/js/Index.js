import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import Store from "./stores";
import { Provider } from "mobx-react";

function App() {
    return (
        <Provider {...new Store()}>
            <Home />
        </Provider>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
