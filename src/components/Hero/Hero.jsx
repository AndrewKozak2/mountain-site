import React from "react";
import s from "./Hero.module.css";
import instagramIcon from "../../assets/icon/instagram.svg";
import twitterIcon from "../../assets/icon/twitter.svg";
import arrowDownIcon from "../../assets/icon/arrow_down.svg";

export default function Hero() {
  return (
    <section className={s.hero} id="start">
      <div className={s.socialLinks}>
        <span className={s.followText}>Follow us</span>
        <div className={s.icons}>
          <a href="#">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>

      <div className={s.heroContent}>
        <span className={s.subtitle}>A HIKING GUIDE</span>
        <h1 className={s.title}>Be Prepared For The Mountains And Beyond!</h1>
        <a href="#section-1" className={s.scrollDown}>
          scroll down
          <img src={arrowDownIcon} alt="arrow" />
        </a>
      </div>

      <div className={s.heroSlider}>
        <div className={s.sliderItem}>Start</div>
        <div className={s.sliderItem}>01</div>
        <div className={s.sliderItem}>02</div>
        <div className={s.sliderItem}>03</div>
      </div>
    </section>
  );
}
