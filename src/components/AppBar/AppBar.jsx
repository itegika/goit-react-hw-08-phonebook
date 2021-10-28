import { useSelector } from "react-redux";
import AuthNav from "../AuthNav";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import { checkIsLoggedIn } from "../../redux/auth/auth-selectors";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(checkIsLoggedIn);
  return (
    <nav className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
}
