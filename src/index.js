import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import CartContextProvider from "./Contexts/CartContextProvider";
import FilmContextProvider from "./Contexts/FilmContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CartContextProvider>
            <AuthContextProvider>
                <FilmContextProvider>
                    <App />
                </FilmContextProvider>
            </AuthContextProvider>
        </CartContextProvider>
    </BrowserRouter>
);
