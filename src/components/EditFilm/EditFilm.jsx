import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { filmContext } from "../../Contexts/FilmContextProvider";
import "./EditFilm.css";

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
          height: { sm: "100vh", xs: "75vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage:
            "url(https://img1.akspic.ru/previews/7/4/0/4/3/134047/134047-film_do_sih_por-kinorezhisser-art-illustracia-film-x750.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "30px",
          }}
        >
          ПАНЕЛЬ ИЗМЕНЕНИЯ
        </Typography>
        <Box
          sx={{
            width: { sm: "60vw", xs: "90%" },
            margin: "3vh auto 10vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr ",
            gridGap: "10px",
          }}
        >
          <TextField
            // sx={{
            //     borderColor: "white",
            //     backgroundColor: "white",
            //     borderRadius: "4px",
            // }}
            className="inputs"
            onChange={(e) => setName(e.target.value)}
            value={name}
            fullWidth
            placeholder="Name"
            variant="outlined"
            size="small"
          />

          <TextField
            className="inputs"
            onChange={(e) => setType(e.target.value)}
            placeholder="type"
            value={type}
            // sx={{
            //     borderColor: "black",
            //     backgroundColor: "white",
            //     borderRadius: "4px",
            // }}
            fullWidth
            variant="outlined"
            size="small"
          />

          <TextField
            className="inputs"
            onChange={(e) => setYear(e.target.value)}
            placeholder="year"
            value={year}
            type="number"
            // sx={{
            //     borderColor: "black",
            //     gridColumn: "1/3",
            //     backgroundColor: "white",
            //     borderRadius: "4px",
            // }}
            fullWidth
            variant="outlined"
            size="small"
          />

          <TextField
            className="inputs"
            onChange={(e) => setDisc(e.target.value)}
            placeholder="discription"
            value={disc}
            // sx={{
            //     borderColor: "black",
            //     backgroundColor: "white",
            //     borderRadius: "4px",
            // }}
            fullWidth
            variant="outlined"
            size="small"
          />

          <TextField
            className="inputs"
            onChange={(e) => setImg(e.target.value)}
            placeholder="image"
            value={img}
            // sx={{
            //     borderColor: "black",
            //     backgroundColor: "white",
            //     borderRadius: "4px",
            // }}
            fullWidth
            variant="outlined"
            size="small"
          />

          <TextField
            className="inputs"
            onChange={(e) => setFilm(e.target.value)}
            placeholder="film"
            value={film}
            // sx={{
            //     borderColor: "black",
            //     backgroundColor: "white",
            //     borderRadius: "4px",
            //     gridColumn: "1/3",
            // }}
            fullWidth
            variant="outlined"
            size="small"
          />

          <Button
            className="button-add"
            onClick={() => {
              handleData();
              navigate(`/edit/${id}`);
            }}
            sx={{
              borderColor: "black",
              backgroundColor: "black",
              color: "white",
              transition: "1000s",
              gridColumn: "1/2",
            }}
            variant="outlined"
            // fullWidth
            // size="large"
          >
            ИЗМЕНИТЬ ФИЛЬМ
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default EditFilm;
