import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.ts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="container-fluid w-100 h-100 m-0 p-0">
      <App />
    </main>
  </React.StrictMode>
);
