import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Routes
import { BrowserRouter as Router } from "react-router-dom";

// Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
