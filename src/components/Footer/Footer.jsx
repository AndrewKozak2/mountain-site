import s from "./Footer.module.css";
import logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.leftColumn}>
        <div>
          <img src={logo} alt="MNTN" className={s.logo} />
          <p className={s.description}>
            Get out there & discover your next slope, mountain & destination!
          </p>
        </div>
        <div className={s.copyright}>
          Copyright 2023 MNTN, Inc. Terms & Privacy
        </div>
      </div>

      <div className={s.rightColumn}>
        <div className={s.linkGroup}>
          <h3 className={s.groupTitle}>More on The Blog</h3>
          <a href="#" className={s.link}>
            About MNTN
          </a>
          <a href="#" className={s.link}>
            Contributors & Writers
          </a>
          <a href="#" className={s.link}>
            Write For Us
          </a>
          <a href="#" className={s.link}>
            Contact Us
          </a>
          <a href="#" className={s.link}>
            Privacy Policy
          </a>
        </div>

        <div className={s.linkGroup}>
          <h3 className={s.groupTitle}>More on MNTN</h3>
          <a href="#" className={s.link}>
            The Team
          </a>
          <a href="#" className={s.link}>
            Jobs
          </a>
          <a href="#" className={s.link}>
            Press
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
