import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List, Card, Button } from "antd";
import Home from "./pages/Home";
import axios from "axios";

const { Meta } = Card;

function App() {
    return <Home />;
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
