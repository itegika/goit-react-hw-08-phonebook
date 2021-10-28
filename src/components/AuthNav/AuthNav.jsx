import { NavLink } from "react-router-dom";
import paths from "../sharedData/sharedData";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to={paths.registration}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign Up
      </NavLink>
      <NavLink
        to={paths.login}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log In
      </NavLink>
    </div>
  );
}
