import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./lib/providers";

const mountAssistant = document.createElement("div");
mountAssistant.id = "assistant-root";
document.body.prepend(mountAssistant);

ReactDOM.createRoot(document.getElementById("assistant-root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
