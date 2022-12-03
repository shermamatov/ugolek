import {
    FormControl,
    InputLabel,
    MenuItem,
    NativeSelect,
    Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { filmContext } from "../../../Contexts/FilmContextProvider";

const Filter = () => {
    const [age, setAge] = React.useState("");
    const { fetchByParams } = useContext(filmContext);
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                padding: "0px 20px",
                backgroundColor: "#2B2B2B",
                marginTop: "40px",
                width: "100%",
                height: "62px",
            }}
        >
            <FormControl sx={{ width: "40%" }}>
                <Select
                    onChange={(e) => fetchByParams("type", e.target.value)}
                    defaultValue={"All"}
                    sx={{
                        color: "white",
                        border: "2px solid white",
                    }}
                    inputProps={{
                        name: "sort",
                    }}
                    size="small"
                >
                    <MenuItem value={"All"}>все </MenuItem>
                    <MenuItem value={"Фантастика"}>Фантастика</MenuItem>
                    <MenuItem value={"Катастрофа"}>Катастрофа</MenuItem>
                    <MenuItem value={"Боевик"}>Боевик</MenuItem>
                    <MenuItem value={"Спорт"}>Спорт</MenuItem>
                    <MenuItem value={"Биография"}>Биография</MenuItem>
                    <MenuItem value={"Драма"}>Драма</MenuItem>
                    <MenuItem value={"Комедия"}>комедия</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: "25%", margin: "0px 10px" }}>
                <Select
                    onChange={(e) => fetchByParams("_sort", e.target.value)}
                    defaultValue={"All"}
                    sx={{
                        color: "white",
                        border: "2px solid white",
                    }}
                    inputProps={{
                        name: "sort",
                    }}
                    size="small"
                >
                    <MenuItem value={"All"}>все</MenuItem>
                    <MenuItem value={"asc"}>старые</MenuItem>
                    <MenuItem value={"desc"}>новые</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: "40%" }}>
                <Select
                    onChange={(e) => fetchByParams("categ", e.target.value)}
                    defaultValue={"All"}
                    sx={{
                        color: "white",
                        border: "2px solid white",
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
    );
};

export default Filter;
