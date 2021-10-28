import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import Filter from "./Filter";
import ContactList from "./ContactsList";
import ContactForm from "./ContactForm";
import AppBar from "./AppBar";
import Container from "./Container";
// import Spinner from "./Spinner";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import authOperations from "../redux/auth/auth-operations";
import { fetchCurrentUser } from "../redux/auth/auth-selectors";
import paths from "./sharedData/sharedData";
import styles from "./App.module.css";

const HomePage = lazy(() =>
  import("../views/HomePageView" /*webpackChunkName: "HomePage"*/)
);
const RegisterPage = lazy(() =>
  import("../views/RegisterPageView" /*webpackChunkName: "RegisterPage"*/)
);
const LoginPage = lazy(() =>
  import("../views/LoginPageView" /*webpackChunkName: "LoginPage"*/)
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(fetchCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense
            fallback={
              // <Spinner />
              <p>Loading...</p>
            }
          >
            <PublicRoute path={paths.home} exact>
              <HomePage />
            </PublicRoute>

            <PublicRoute path={paths.registration} restricted>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute
              path={paths.login}
              redirectTo={paths.contacts}
              restricted
            >
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path={paths.contacts} redirectTo={paths.login}>
              <div className={styles.box}>
                <h1 className={styles.phonebook}>Phonebook</h1>
                <ContactForm />
                <h2 className={styles.contacts}>Contacts</h2>
                <Filter />
                <ContactList />
              </div>
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

export default App;
