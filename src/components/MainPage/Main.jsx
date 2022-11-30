import { Box } from "@mui/material";
import React from "react";
import FilmList from "./Films/FilmList";
import Filter from "./Filters/Filter";
import SimpleSlider from "./Slider/Slider";

const Main = () => {
    return (
        <Box
            sx={{
                width: { sm: "90%", xs: "100%" },
                margin: "auto",
                padding: "2% 0",
            }}
        >
            <SimpleSlider />
            <Filter />
            <FilmList />
        </Box>
    );
};

export default Main;
