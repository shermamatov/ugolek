import {
    FormControl,
    InputLabel,
    MenuItem,
    NativeSelect,
    Select,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { filmContext } from "../../../Contexts/FilmContextProvider";

const Filter = () => {
    const [age, setAge] = React.useState("");
    const { testData, searchData, testSort } = useContext(filmContext);
    const handleChange = () => {};
    return (
        <Box sx={{ marginTop: "40px" }}>
            <Typography
                sx={{
                    marginLeft: "20px",
                    fontSize: "28px",
                    marginBottom: "30px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                }}
            >
                Фильмы смотреть онлайн
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 20px",
                    backgroundColor: "#2B2B2B",
                    width: "100%",
                    height: "70px",
                }}
            >
                <FormControl sx={{ width: "40%" }}>
                    <Select
                        onChange={(e) => testData("type", e.target.value)}
                        defaultValue={"All"}
                        sx={{
                            color: "white",
                            // border: "2px solid white",
                        }}
                        inputProps={{
                            name: "sort",
                        }}
                        size="small"
                    >
                        <MenuItem value={"All"}>все жанры</MenuItem>
                        <MenuItem value={"Фантастика"}>Фантастика</MenuItem>
                        <MenuItem value={"Катастрофа"}>Катастрофа</MenuItem>
                        <MenuItem value={"Боевик"}>Боевик</MenuItem>
                        <MenuItem value={"Спорт"}>Спорт</MenuItem>
                        <MenuItem value={"Биография"}>Биография</MenuItem>
                        <MenuItem value={"Драма"}>Драма</MenuItem>
                        <MenuItem value={"Комедия"}>комедия</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    sx={{ width: "25%", margin: "0px 10px", border: "none" }}
                >
                    <Select
                        onChange={(e) => testSort(e.target.value)}
                        defaultValue={"All"}
                        sx={{
                            color: "white",
                        }}
                        inputProps={{
                            name: "sort",
                        }}
                        size="small"
                    >
                        <MenuItem value={"All"}>сортировать</MenuItem>
                        <MenuItem value={"asc"}>сначала старые</MenuItem>
                        <MenuItem value={"desc"}>сначала новые</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: "40%" }}>
                    <Select
                        onChange={(e) => testData("categ", e.target.value)}
                        defaultValue={"All"}
                        sx={{
                            color: "white",
                            // border: "2px solid white",
                            outline: "none",
                        }}
                        inputProps={{
                            name: "sort",
                        }}
                        size="small"
                    >
                        <MenuItem value={"All"}>все</MenuItem>
                        <MenuItem value={"фильм"}>фильм</MenuItem>
                        <MenuItem value={"мультфильм"}>мультфильм</MenuItem>
                        <MenuItem value={"сериал"}>сериал</MenuItem>
                        <MenuItem value={"аниме"}>аниме</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Filter;
