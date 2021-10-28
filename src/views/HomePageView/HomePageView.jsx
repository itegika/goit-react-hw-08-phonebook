import { useSelector } from "react-redux";
import { checkIsLoggedIn, getUserName } from "../../redux/auth/auth-selectors";
import styles from "./HomePage.module.css";

export default function HomeView() {
  const isLoggedIn = useSelector(checkIsLoggedIn);
  const userName = useSelector(getUserName);

  return (
    <>
      {isLoggedIn ? (
        <div className={styles.box}>
          <p className={styles.text}>Hi, {userName}!</p>
        </div>
      ) : (
        <div className={styles.box}>
          <p className={styles.text}>Welcome to the Phonebook!</p>
          <p className={styles.text}>Register or log in, please...</p>
        </div>
      )}
    </>
  );
}
