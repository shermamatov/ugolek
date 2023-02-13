import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import { cartContext } from "../../../Contexts/CartContextProvider";
export default function FilmCard({ item }) {
    const [cartState, setCartState] = React.useState(true);
    const [hover, setHover] = React.useState(false);
    const { addFilmToCart, deleteFilmToCart } = React.useContext(cartContext);
    const navigate = useNavigate();
    // const addToCart = () => {
    //     addFilmToCart(item);
    // };
    // const deleteToCart = () => {
    //     deleteToCart(item.id);
    // };
    return (
        <Card
            sx={{ maxWidth: 240, backgroundColor: "#141414", color: "white" }}
            onClick={() => {
                navigate(`/watch/${item.id}`);
                window.scrollTo(0, 0);
            }}
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
                        setCartState(false);
                        addFilmToCart(item);
                    }}
                >
                    <BookmarkAddOutlinedIcon />
                </Box>
                {/* <BookmarkAddedOutlinedIcon /> */}
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
    );
}
