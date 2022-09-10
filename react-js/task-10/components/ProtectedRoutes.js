import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/reducers/userReducer/selectors";
import LoadingToRedirect from "./LoadingToRedirect";

const ProtectedRoutes = ({ children }) => {
  const user = useSelector(userSelector);
  if (!user) {
    return <LoadingToRedirect />;
  }
  return children;
};

export default ProtectedRoutes;
