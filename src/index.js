import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Assuming you have a global stylesheet

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure your HTML file has a div with id 'root'
);
