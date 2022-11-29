import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { filmContext } from "../../Contexts/FilmContextProvider";
import FilmCard from "./FilmCard";

const FilmList = () => {
    const { data, getData } = useContext(filmContext);
    useEffect(() => {
        getData();
    }, []);
    return (
        <Box>
            {data.map((item) => (
                <FilmCard key={item.id} item={item} />
            ))}
        </Box>
    );
};

export default FilmList;
