import { useSelector } from "react-redux";
import { checkIsLoggedIn } from "../../redux/auth/auth-selectors";
import { NavLink } from "react-router-dom";
import paths from "../sharedData/sharedData";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(checkIsLoggedIn);
  return (
    <nav>
      <NavLink
        exact
        to={paths.home}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          exact
          to={paths.contacts}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
