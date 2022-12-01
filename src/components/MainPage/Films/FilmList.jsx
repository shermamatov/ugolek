import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { filmContext } from "../../../Contexts/FilmContextProvider";
import FilmCard from "./FilmCard";

const FilmList = () => {
  const { data, getData } = useContext(filmContext);
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box
      sx={{
        display: { sm: "grid", xs: "flex" },
        flexDirection: "column",
        marginTop: "30px",
        alignItems: { sm: "start", xs: "center" },
        gridTemplateColumns: {
          lg: "1fr 1fr 1fr 1fr 1fr",
          md: "1fr 1fr 1fr 1fr ",
          sm: "1fr 1fr 1fr",
          xs: "1fr",
        },
        gridGap: "20px",
      }}
    >
      {data.map((item) => (
        <FilmCard key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default FilmList;
