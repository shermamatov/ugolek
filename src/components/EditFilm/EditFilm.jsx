import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { filmContext } from "../../Contexts/FilmContextProvider";

const EditFilm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState(0);
    const [disc, setDisc] = useState("");
    const [img, setImg] = useState("");
    const [film, setFilm] = useState("");
    const { oneData, editData } = useContext(filmContext);
    useEffect(() => {
        if (oneData) {
            setName(oneData.name);
            setType(oneData.type);
            setYear(oneData.year);
            setDisc(oneData.disc);
            setImg(oneData.img);
            setFilm(oneData.film);
        }
    }, [oneData]);
    const navigate = useNavigate();
    const { id } = useParams();
    function handleData() {
        let obj = {
            name,
            type,
            year,
            disc,
            img,
            film,
        };
        editData(id, obj);
    }
    return (
        <div>
            <Box
                align="center"
                sx={{
                    height: "70vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography
                    sx={{
                        color: "white",
                        fontSize: "30px",
                    }}
                >
                    ADD FILM PANEL
                </Typography>
                <Box
                    sx={{
                        width: "60vw",
                        margin: "3vh auto 10vh",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr ",
                        gridGap: "10px",
                    }}
                >
                    <TextField
                        sx={{
                            borderColor: "white",
                            backgroundColor: "white",
                            borderRadius: "4px",
                        }}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        fullWidth
                        placeholder="Name"
                        variant="outlined"
                        size="small"
                    />

                    <TextField
                        onChange={(e) => setType(e.target.value)}
                        placeholder="type"
                        value={type}
                        sx={{
                            borderColor: "black",
                            backgroundColor: "white",
                            borderRadius: "4px",
                        }}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />

                    <TextField
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="year"
                        value={year}
                        type="number"
                        sx={{
                            borderColor: "black",
                            gridColumn: "1/3",
                            backgroundColor: "white",
                            borderRadius: "4px",
                        }}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />

                    <TextField
                        onChange={(e) => setDisc(e.target.value)}
                        placeholder="discription"
                        value={disc}
                        sx={{
                            borderColor: "black",
                            backgroundColor: "white",
                            borderRadius: "4px",
                        }}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />

                    <TextField
                        onChange={(e) => setImg(e.target.value)}
                        placeholder="image"
                        value={img}
                        sx={{
                            borderColor: "black",
                            backgroundColor: "white",
                            borderRadius: "4px",
                        }}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />

                    <TextField
                        onChange={(e) => setFilm(e.target.value)}
                        placeholder="film"
                        value={film}
                        sx={{
                            borderColor: "black",
                            backgroundColor: "white",
                            borderRadius: "4px",
                            gridColumn: "1/3",
                        }}
                        fullWidth
                        variant="outlined"
                        size="small"
                    />

                    <Button
                        onClick={() => {
                            handleData();
                            navigate(`/edit/${id}`);
                        }}
                        sx={{
                            borderColor: "black",
                            backgroundColor: "#0B1F4F",
                            color: "white",
                            transition: "1000s",
                            gridColumn: "1/3",
                        }}
                        variant="outlined"
                        fullWidth
                        size="large"
                    >
                        ADD FILM
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default EditFilm;
