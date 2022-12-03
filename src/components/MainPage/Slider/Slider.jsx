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
                zIndex: "10",
                // color: "red",
                // backgroundColor: "red",
                height: "100%",
                width: "100px",
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
                            src="https://cdn.lifehacker.ru/wp-content/uploads/2019/10/Polnyj-gid-po-vsem-filmam-i-teleserialam-o-Betmene_1570140886.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="https://img2.akspic.ru/crops/3/0/4/0/7/170403/170403-chudo_zemli_trn700-chelovek_pauk-majlz_morales-poster-tendencii_mezhdunarodnogo-3840x2160.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="https://img3.akspic.ru/previews/0/3/5/8/5/158530/158530-semya_addams_2019-semejka_addams-sreda_addams-gomes_addams-mortisiya_addams-x750.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="https://img1.akspic.ru/previews/4/9/8/6/3/136894/136894-film-art-vymyslennyj_personaz-multfilm-illustracia-x750.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="https://img3.akspic.ru/previews/4/1/6/6/56614/56614-film-kino-kinoteatr-vymyslennyj_personaz-film_kritika-x750.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="https://img2.akspic.ru/previews/0/9/5/3/2/123590/123590-vymyslennyj_personaz-televideniye-fikciya-zheltyj-iskusstvo-x750.jpg"
                            alt=""
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
