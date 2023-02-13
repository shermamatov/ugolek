import React, { createContext, useState } from "react";
export const cartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState(
        JSON.parse(localStorage.getItem("wish"))
    );
    const addFilmToCart = (film) => {
        let wish = JSON.parse(localStorage.getItem("wish"));
        if (!wish) {
            wish = [];
        }
        let somer = wish.some((elem) => elem.id == film.id);
        if (!somer) {
            wish.push(film);
        } else {
            wish = wish.filter((elem) => elem.id !== film.id);
        }
        localStorage.setItem("wish", JSON.stringify(wish));
        setCartData(wish);
    };
    function getFilmToCart() {
        if (!localStorage.getItem("wish")) {
            localStorage.setItem("wish", "[]");
        }
        let cart = JSON.parse(localStorage.getItem("wish"));
        setCartData(cart);
    }
    function deleteFilmToCart(id) {
        let cart = JSON.parse(localStorage.getItem("wish"));
        cart = cart.filter((elem) => elem.id !== id);
        localStorage.setItem("wish", JSON.stringify(cart));
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
