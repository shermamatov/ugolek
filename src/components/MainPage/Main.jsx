import { Box, PaginationItem } from "@mui/material";
import React from "react";
import FilmList from "./Films/FilmList";
import Filter from "./Filters/Filter";
import SimpleSlider from "./Slider/Slider";

const Main = ({ currentData }) => {
  return (
    <Box
      sx={{
        width: { sm: "90%", xs: "100%" },
        margin: "auto",
        padding: "2% 0",
      }}
    >
      <FilmList currentData={currentData} />
    </Box>
  );
};

export default Main;
