import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.ts";
import "./index.js";
import "./components/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="text-slate-900">
      <App />
    </main>
  </React.StrictMode>
);
