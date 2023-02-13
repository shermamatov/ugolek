import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../../Contexts/CartContextProvider";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CartCard from "./CartCard";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import "./Cart.css";
const Cart = () => {
    const { getFilmToCart, cartData } = useContext(cartContext);
    useEffect(() => {
        getFilmToCart();
    }, []);
    return (
        <div>
            <Typography sx={{ fontSize: "42px", textAlign: "center" }}>
                сохраненные
            </Typography>
            {cartData.length !== 0 ? (
                cartData.map((item) => (
                    <Box
                        sx={{
                            display: { sm: "grid", xs: "flex" },
                            flexDirection: "column",
                            marginTop: "30px",
                            marginBottom: "30px",
                            padding: "0px 30px",
                            alignItems: { sm: "start", xs: "center" },
                            gridTemplateColumns: {
                                lg: "1fr 1fr 1fr 1fr 1fr",
                                md: "1fr 1fr 1fr 1fr ",
                                sm: "1fr 1fr 1fr",
                                xs: "1fr",
                            },
                            gridGap: "20px",
                        }}
                    >
                        <CartCard key={item.id} item={item} />
                    </Box>
                ))
            ) : (
                <div
                    className="nones"
                    style={{ fontSize: "50px", height: "70vh" }}
                >
                    <div className="none-block">
                        <p>здесь пока нечего нет</p>
                        <BookmarksIcon
                            sx={{ fontSize: "100px", marginTop: "20px" }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
