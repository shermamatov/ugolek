import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function FilmCard({ item }) {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#141414" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                />
                <CardContent>
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
