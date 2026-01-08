import React, { useEffect, useState } from "react";
import s from "./Hero.module.css";
import mgImage from "../../assets/MG.png";
import vgImage from "../../assets/VG.png";
import bgContent from "../../assets/BG Content.png";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (targetId, duration = 2000) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <section className={s.hero} id="start">
      {" "}
      <div className={s.socialLinks}>
        <span className={s.followText}>Follow us</span>
        <div className={s.icons}>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8 2.00002H16.2C19.4032 2.00002 22 4.59677 22 7.80002V16.2C22 19.4033 19.4032 22 16.2 22H7.8C4.59675 22 2 19.4033 2 16.2V7.80002C2 4.59677 4.59675 2.00002 7.8 2.00002ZM7.6 4C5.61177 4 4 5.61178 4 7.6V16.4C4 18.3882 5.61177 20 7.6 20H16.4C18.3882 20 20 18.3882 20 16.4V7.6C20 5.61178 18.3882 4 16.4 4H7.6ZM17.25 5.5C17.9404 5.5 18.5 6.05965 18.5 6.75C18.5 7.44036 17.9404 8 17.25 8C16.5596 8 16 7.44036 16 6.75C16 6.05965 16.5596 5.5 17.25 5.5ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23857 17 7 14.7614 7 12C7 9.23858 9.23857 7 12 7ZM12 9C10.3431 9 9 10.3432 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3432 13.6569 9 12 9Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4592 6.01238C21.6896 6.35373 20.8624 6.58442 19.9944 6.68815C20.8803 6.15701 21.5609 5.31598 21.8813 4.31378C21.052 4.80564 20.1336 5.16278 19.156 5.3552C18.3732 4.52112 17.2579 4 16.0235 4C13.6534 4 11.7317 5.92147 11.7317 8.29155C11.7317 8.6279 11.7697 8.95546 11.8429 9.2696C8.27609 9.0906 5.11375 7.38203 2.99709 4.78551C2.62765 5.41935 2.41601 6.15656 2.41601 6.94309C2.41601 8.43204 3.17364 9.74563 4.32523 10.5153C3.62179 10.4929 2.95996 10.2999 2.38139 9.97846C2.38098 9.99639 2.38098 10.0143 2.38098 10.0324C2.38098 12.1118 3.86033 13.8463 5.82359 14.2406C5.46349 14.3387 5.08434 14.3912 4.69294 14.3912C4.4164 14.3912 4.14755 14.3642 3.88546 14.3142C4.43161 16.0191 6.01653 17.26 7.89454 17.2945C6.42576 18.4457 4.57527 19.1318 2.56453 19.1318C2.21812 19.1318 1.87651 19.1114 1.54077 19.0717C3.44003 20.2894 5.69591 21 8.1195 21C16.0134 21 20.3302 14.4605 20.3302 8.78918C20.3302 8.60314 20.326 8.41805 20.3177 8.23395C21.1563 7.62886 21.8839 6.87302 22.4592 6.01238Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className={s.heroSlider}>
        <div className={s.sliderItem} onClick={() => smoothScroll("start")}>
          Start
        </div>
        <div
          className={s.sliderItem}
          onClick={() => smoothScroll("section-01")}
        >
          01
        </div>
        <div
          className={s.sliderItem}
          onClick={() => smoothScroll("section-02")}
        >
          02
        </div>
        <div
          className={s.sliderItem}
          onClick={() => smoothScroll("section-03")}
        >
          03
        </div>
      </div>
      <div
        className={s.contentLayer}
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className={s.heroContent}>
          <span className={s.subtitle}>A HIKING GUIDE</span>
          <h1 className={s.title}>Be Prepared For The Mountains And Beyond!</h1>
          <div
            className={s.scrollDown}
            onClick={() => smoothScroll("section-01", 1500)}
          >
            scroll down
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
      <img src={mgImage} alt="Mountains" className={s.layerMG} />
      <img src={vgImage} alt="Grass" className={s.layerVG} />
      <img src={bgContent} alt="Shadow" className={s.layerShadow} />
    </section>
  );
}
