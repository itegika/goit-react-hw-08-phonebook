import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { checkIsLoggedIn } from "../redux/auth/auth-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  console.log(routeProps);
  const isLoggedIn = useSelector(checkIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
