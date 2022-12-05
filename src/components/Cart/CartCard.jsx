import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Contexts/CartContextProvider";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

const CartCard = ({ item }) => {
    const [cartState, setCartState] = React.useState(true);
    const [hover, setHover] = React.useState(false);
    const { deleteFilmToCart } = React.useContext(cartContext);
    const navigate = useNavigate();

    return (
        <div>
            <Card
                sx={{
                    maxWidth: 240,
                    backgroundColor: "#141414",
                    color: "white",
                }}
                onClick={() => navigate(`/watch/${item.id}`)}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%" }}
                        image={item.img}
                        alt="green iguana"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    />
                    <Box
                        sx={{
                            display: hover ? "block" : "none",
                            position: "absolute",
                            top: "-30px",
                            right: "-25px",
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            backgroundColor: "rgb(80,80,80,0.7)",
                            padding: "40px 0  0 18px ",
                        }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCartState(true);
                            deleteFilmToCart(item.id);
                        }}
                    >
                        <BookmarkAddedOutlinedIcon />
                    </Box>

                    <CardContent sx={{ height: "20%" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="white">
                            {item.year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CartCard;
