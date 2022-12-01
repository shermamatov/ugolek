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
        zIndex: "3",
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
              src="https://i.pinimg.com/originals/ee/5f/e1/ee5fe132f18c1c63f57af16616104560.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://wallup.net/wp-content/uploads/2016/01/113166-comics-Spider-Man.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://media.kg-portal.ru/tv/s/samuraijack/production/samuraijack_1.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.iptv.rt.ru/images/cc3n4lbir4ssk11vqk4g.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://miridei.com/files/img/c/idei-dosuga/kakoi-film-posmotret/0_croods.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="http://3.bp.blogspot.com/_AERv7DYKpsY/TKSWmLRfRjI/AAAAAAAABo0/34dPg7Xewac/s1600/1.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
