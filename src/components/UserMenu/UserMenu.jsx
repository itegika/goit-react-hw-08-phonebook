import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const logOut = () => dispatch(authOperations.logOut());
  return (
    <div className={styles.container}>
      <span className={styles.box}>
        Logged as <p className={styles.name}>{name}</p>
      </span>
      <button type="button" className={styles.button} onClick={logOut}>
        Logout
      </button>
    </div>
  );
}
