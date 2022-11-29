import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FilmContextProvider from "./Contexts/FilmContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <FilmContextProvider>
            <App />
        </FilmContextProvider>
    </BrowserRouter>
);
