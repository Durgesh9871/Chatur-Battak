import { useContext } from "react";
import { Navigate } from "react-router-dom";import { AuthContext } from "./Context/AuthContext";
;

function PrivateRoute({ children }:any) {
  const { authState } = useContext(AuthContext);
  if (!authState.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;