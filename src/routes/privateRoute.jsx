import React from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../UserContext";

const PrivateRoute = ({children}) => {
  const { login } = React.useContext(UserContext);

  if (login === true) return children;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default PrivateRoute;
