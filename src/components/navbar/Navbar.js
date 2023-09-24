import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import home from "../../assets/podcast.svg";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <ul className={styles["nav-links"]}>
          <li className={styles["link-item"]}>
            <NavLink to={"/"}>HOME</NavLink>
          </li>

          <li className={styles["link-item"]}>
            <NavLink to={"/social"}>SOCIAL</NavLink>
          </li>
          <li className={styles["link-item"]}>
            <NavLink to={"/library"}>LIBRARY</NavLink>
          </li>
        </ul>
        <SearchBar />
        <Profile />
      </nav>
    </>
  );
}

export default NavBar;
