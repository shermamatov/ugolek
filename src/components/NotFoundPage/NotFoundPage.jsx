import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import mike from "../../img/mike.png";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: { xs: "25vh", sm: "20vh" },
                }}
            >
                <CardMedia component="img" image={mike} width="100%" />
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "48px" }}>404</Typography>
                <Typography sx={{ fontSize: "48px" }}>
                    oh! page not found
                </Typography>
            </Box>
            <Button
                onClick={() => navigate("/")}
                sx={{
                    backgroundColor: "transparent",
                    border: "2px solid white",
                    mt: "20px",
                    width: "200px",
                    color: "white",
                }}
            >
                BACK TO MENU
            </Button>
        </Box>
    );
};

export default NotFoundPage;
