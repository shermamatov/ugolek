import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { filmContext } from "../../Contexts/FilmContextProvider";
import "./AddFilm.css";

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
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage:
            "url(https://i.guim.co.uk/img/media/006e580ef0ee8c46c17b265f2bf66e7f0c61b746/3436_0_8487_5097/master/8487.jpg?width=1020&quality=45&dpr=2&s=none)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="text-adminPanel">АДМИН ПАНЕЛЬ</p>

        <Box
          sx={{
            width: "60vw",
            margin: "3vh auto 10vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr ",
            gridGap: "10px",
          }}
        >
          <input
            className="inputs"
            onChange={(e) => setName(e.target.value)}
            placeholder="НАЗВАНИЕ"
          />

          <input
            className="inputs"
            onChange={(e) => setType(e.target.value)}
            placeholder="ТИП/ЖАНР"
          />

          <input
            className="inputs"
            onChange={(e) => setYear(e.target.value)}
            placeholder="ГОД ИЗДАНИЯ"
            type="number"
          />

          <input
            className="inputs"
            onChange={(e) => setDisc(e.target.value)}
            placeholder="ОПИСАНИЕ"
          />

          <input
            className="inputs"
            onChange={(e) => setImg(e.target.value)}
            placeholder="КАРТИНКА"
          />

          <input
            className="inputs"
            onChange={(e) => setFilm(e.target.value)}
            placeholder="ФИЛЬМ"
          />

          <button className="button-add" onClick={handleData}>
            ДОБАВИТЬ ФИЛЬМ
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default AddFilm;
