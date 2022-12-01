import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FilmCard({ item }) {
    const navigate = useNavigate();
    return (
        <Card
            sx={{ maxWidth: 240, backgroundColor: "#141414", color: "white" }}
            onClick={() => navigate(`/watch/${item.id}`)}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{ width: "100%" }}
                    image={item.img}
                    alt="green iguana"
                />
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
