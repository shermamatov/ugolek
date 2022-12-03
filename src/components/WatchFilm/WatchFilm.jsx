import { Box, Button, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { filmContext } from "../../Contexts/FilmContextProvider";

const WatchFilm = () => {
    const { deleteData, oneData, getOneDate } = useContext(filmContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        user: { email },
    } = useAuth();
    useEffect(() => {
        getOneDate(id);
    }, []);
    function test() {
        console.log(oneData);
    }
    return (
        <Box sx={{ width: "80%", margin: "auto", padding: "40px 0px" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    marginBottom: "40px",
                }}
            >
                <Box
                    sx={{
                        width: { md: "23%", sm: "40%", xs: "60%" },
                        margin: { md: "0", xs: "auto" },
                    }}
                >
                    <img
                        // src="https://ixbt.online/live/images/original/16/95/46/2022/11/19/ecbe80840c.jpg"
                        src={oneData.img}
                        width="100%"
                        alt=""
                    />
                </Box>
                <Box
                    sx={{
                        width: { xs: "100%", md: "75%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box display="flex">
                        <Typography
                            sx={{
                                fontSize: { md: "2em", sm: "1.5em", xs: "2em" },
                            }}
                        >
                            {oneData.name}
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <Typography
                            sx={{
                                marginRight: "10px",
                                fontSize: { md: "0.9em", sm: "0.8em" },
                                color: "gray",
                                fontWeight: "lighter",
                                fontFamily: "sans-serif",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            тип/жанр:
                        </Typography>
                        <Typography
                            sx={{ fontSize: { md: "1em", sm: "0.8em" } }}
                        >
                            {oneData.type}
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <Typography
                            sx={{
                                marginRight: "10px",
                                fontSize: { xs: "1em" },
                                color: "gray",
                                fontWeight: "lighter",
                                fontFamily: "sans-serif",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            год:
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: "1.1em", sm: "1em" } }}
                        >
                            {oneData.year}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            opacity: "0.7",
                            fontSize: { lg: "1.1em", md: "0.9em", xs: "0.7em" },
                        }}
                    >
                        {oneData.disc}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: {
                        lg: "500px",
                        md: "400px",
                        sm: "300px",
                        xs: "200px",
                    },
                }}
            >
                <iframe
                    src={oneData.film}
                    loading="lazy"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen=""
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                ></iframe>
            </Box>{" "}
            {email && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "30px",
                    }}
                >
                    <Button
                        onClick={() => {
                            deleteData(id);
                            navigate("/");
                        }}
                        sx={{
                            width: "48%",
                            boxShadow: "5px 5px 30px -5px rgba(0, 0, 0, 0.6)",
                        }}
                    >
                        delete
                    </Button>
                    <Button
                        sx={{
                            width: "48%",
                            boxShadow: "5px 5px 30px -5px rgba(0, 0, 0, 0.6)",
                        }}
                        onClick={() => {
                            navigate(`/edit/${id}`);
                            window.scrollTo(0, 70);
                        }}
                    >
                        edit
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default WatchFilm;
