import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-div1">
        <h4 className="footer-text1">
          Смотри общедоступные телеканалы бесплатно, круглосуточно и в
          непрерывном режиме
        </h4>
      </div>

      <div className="footer-div2">
        <h5 className="footer-text2">
          Тетя Марта Надвое Стая Сказки Пушкина. Для взрослых Домашнее поле
          Трудные подростки 4 сезон The Тёлки Happy End(Хэппи-энд) Псих Чики СТС
          Рассказ служанки 5 сезонcdc
        </h5>
      </div>

      <div className="footer-social">
        <a className="footer-social-icon" href="https://www.instagram.com/">
          <InstagramIcon />
        </a>
        <a className="footer-social-icon" href="https://vk.com/">
          <FacebookIcon />
        </a>
        <a className="footer-social-icon" href="https://twitter.com/">
          <TwitterIcon />
        </a>
        <a className="footer-social-icon" href="https://www.youtube.com/">
          <YouTubeIcon />
        </a>
        <a className="footer-social-icon" href="https://telegram.org/">
          <TelegramIcon />
        </a>
      </div>

      <div className="footer-div3">
        <a href="#" className="footer-text3">
          О нас
        </a>
        <a href="#" className="footer-text3">
          Контакты
        </a>
        <a href="#" className="footer-text3">
          Партнёры
        </a>
        <a href="#" className="footer-text3">
          Вопросы и ответы
        </a>
        <a href="#" className="footer-text3">
          Блог
        </a>
        <a href="#" className="footer-text3">
          Support@ugolek.tv
        </a>
      </div>
      <div className="footer-div4">
        <a className="footer-text4" href="#">
          Вакансии
        </a>
        <a className="footer-text4" href="#">
          Подарочный сертификат
        </a>
        <a className="footer-text4" href="#">
          Карта сайта
        </a>
        <a className="footer-text4" href="#">
          Пользовательское соглашение
        </a>
      </div>
      <div className="footer-div5">
        <h2 className="footer-text5">ugolek.tv</h2>
      </div>
    </div>
  );
};

export default Footer;
