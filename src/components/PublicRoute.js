import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { checkIsLoggedIn } from "../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  redirectTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(checkIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
