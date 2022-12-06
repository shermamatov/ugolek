import { Box, Button, TextField, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { filmContext } from "../../Contexts/FilmContextProvider";
import Comment from "./Comment";
import { createTheme } from "@mui/material/styles";

const WatchFilm = () => {
    const [comment, setComment] = useState("");
    const { deleteData, oneData, getOneDate, editData } =
        useContext(filmContext);
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        user: { email },
    } = useAuth();
    useEffect(() => {
        getOneDate(id);
    }, [oneData]);
    function handleData() {
        if (!comment) {
            alert("заполните все поля");
            return;
        }
        let obj = {
            name: oneData.name,
            type: oneData.type,
            year: oneData.year,
            disc: oneData.disc,
            img: oneData.img,
            film: oneData.film,
            comment: [
                ...oneData.comment,
                { userName: email, comment, time, date, id: new Date() },
            ],
        };
        editData(id, obj);
        getOneDate(id);
        setComment("");
    }
    const ADMIN = "admin@gmail.com";
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
                    <img src={oneData.img} width="100%" alt="" />
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
            </Box>
            {email && (
                <Box
                    sx={{
                        marginTop: "50px",
                        marginBottom: "100px",
                        borderTop: "2px solid gray",
                    }}
                >
                    {" "}
                    <Typography sx={{ fontSize: { xs: "30px", sm: "40px" } }}>
                        коментарии
                    </Typography>
                    <textarea
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="comment"
                        value={comment}
                        style={{
                            width: "100%",
                            height: "100px",
                            border: "1px solid gray",
                            backgroundColor: "transparent",
                            padding: "10px",
                            marginTop: "10px",
                            fontSize: { xs: "16px", sm: "20px" },
                            color: "white",
                        }}
                    ></textarea>
                    <Button
                        onClick={() => {
                            handleData();
                        }}
                        sx={{
                            width: "100%",
                            height: "40px",
                            backgroundColor: "green",
                            color: "white",
                            transition: "500s",
                        }}
                    >
                        add comment
                    </Button>
                </Box>
            )}

            <Box>
                {oneData.comment ? (
                    oneData.comment.map((item) => (
                        <Comment key={item.id} item={item} />
                    ))
                ) : (
                    <></>
                )}
            </Box>

            {email === ADMIN && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginBottom: "30px",
                        mt: "50px",
                    }}
                >
                    <Button
                        onClick={() => {
                            deleteData(id);
                            navigate("/");
                        }}
                        sx={{
                            width: "48%",
                            backgroundColor: "red",
                            color: "white",
                            transition: "500s",
                            opacity: "0.9",
                        }}
                    >
                        delete
                    </Button>
                    <Button
                        sx={{
                            width: "48%",
                            backgroundColor: "blue",
                            color: "white",
                            transition: "500s",
                            opacity: "0.9",
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
