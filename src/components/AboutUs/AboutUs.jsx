import { Box } from "@mui/system";
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Box
      sx={{
        height: { sm: "90vh", xs: "75vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage:
          "url(https://regnum.ru/uploads/pictures/news/2021/08/06/regnum_picture_1628268020778283_normal.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="box"
    >
      <div className="div1">
        {/* <h3>    
          ugolek.tv — это все, что ты смотришь и даже больше. Тебя ждет самый
          широкий выбор сериалов и фильмов для всей семьи, весь контент главных
          фильмовыв одном месте и совершенно бесплатно. Начни просмотр дома на
          сайте. Открывай каждый день ugolek.tv
        </h3> */}
        <h3>ugolek.tv - это творение команды 'TUMAN'.</h3>
        <h3>
          Это учебный проект, но для нас это особый проект, ведь это наш первый
          проект на React
        </h3>
        <h3>
          Также этот сайт дает возможность смотреть фильмы онлайн бесплатно и
          самое главное без рекламы.
        </h3>
        <h3>Так что запасайся едой и смотри ugolek.tv!</h3>
      </div>
    </Box>
  );
};

export default AboutUs;
