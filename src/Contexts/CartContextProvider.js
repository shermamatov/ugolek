import React, { createContext, useState } from "react";
export const cartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState(
        JSON.parse(localStorage.getItem("film-data"))
    );
    const addFilmToCart = (film) => {
        let data = JSON.parse(localStorage.getItem("film-data")) || [];
        data.push(film);
        localStorage.setItem("film-data", JSON.stringify(data));
        console.log(data);
    };
    const getFilmToCart = () => {
        if (!localStorage.getItem("film-data")) {
            localStorage.setItem("film-data", "[]");
        }
        let cart = JSON.parse(localStorage.getItem("film-data"));
        setCartData(cart);
    };
    function deleteFilmToCart(id) {
        let cart = JSON.parse(localStorage.getItem("film-data"));
        cart = cart.filter((elem) => elem.id !== id);
        localStorage.setItem("film-data", JSON.stringify(cart));
        console.log(cartData);
        getFilmToCart();
    }
    const values = {
        addFilmToCart,
        deleteFilmToCart,
        getFilmToCart,
        cartData,
    };

    return (
        <cartContext.Provider value={values}>{children}</cartContext.Provider>
    );
};

export default CartContextProvider;
