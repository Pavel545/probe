import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { purchases } from "./constants";
import { PurchasesContext } from "./context/purchases";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { AppRoutes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
        <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
