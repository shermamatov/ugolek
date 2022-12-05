import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../../Contexts/CartContextProvider";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CartCard from "./CartCard";

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
                {cartData.map((item) => (
                    <CartCard key={item.id} item={item} />
                ))}
            </Box>
        </div>
    );
};

export default Cart;
