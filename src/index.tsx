import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { AppStateProvider } from "../src/state/AppStateContent";

ReactDOM.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById("root")
);
