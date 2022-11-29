import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { filmContext } from "../../Contexts/FilmContextProvider";

const AddFilm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState(0);
    const [disc, setDisc] = useState("");
    const [img, setImg] = useState("");
    const [film, setFilm] = useState("");
    const { addData, getData } = useContext(filmContext);
    function handleData() {
        let obj = {
            name,
            type,
            year,
            disc,
            img,
            film,
        };
        addData(obj);
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
                        fullWidth
                        placeholder="Name"
                        variant="outlined"
                        size="small"
                    />

                    <TextField
                        onChange={(e) => setType(e.target.value)}
                        placeholder="type"
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
                        onClick={handleData}
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

export default AddFilm;
