import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const mountAssistant = document.createElement("div");
mountAssistant.id = "assistant-root";
document.body.appendChild(mountAssistant);

ReactDOM.createRoot(document.getElementById("assistant-root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
