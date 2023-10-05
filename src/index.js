import React from "react";
import ReactDom from "react-dom/client"

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App />)
