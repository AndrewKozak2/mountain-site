import logo from "../../assets/Logo.svg";
import userIcon from "../../assets/icon/user-icon.svg";
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <img src={logo} alt="MNTN" />
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">Equipment</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <div className={styles.user}>
          <img src={userIcon} alt="userIcon" />
          <span>Account</span>
        </div>
      </div>
    </header>
  );
}
