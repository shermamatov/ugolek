import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      sx={{
        ...style,
        display: { sm: "block", xs: "none" },
        fontSize: "45px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosOutlinedIcon
      className={className}
      sx={{
        ...style,
        zIndex: "10",
        height: "100%",
        width: "100px",
        display: { sm: "block", xs: "none" },
        fontSize: "45px",
      }}
      onClick={onClick}
    />
  );
}
export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide">
            <img
              src="https://i.pinimg.com/564x/ee/5f/e1/ee5fe132f18c1c63f57af16616104560.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
