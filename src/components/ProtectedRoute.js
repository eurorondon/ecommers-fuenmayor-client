import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = (children) => {
  const isAuthenticated = !!localStorage.getItem(
    "CognitoIdentityServiceProvider.<clientId>.<username>.accessToken"
  );

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;

  // return (
  //   \
  //   const ProtectedRoute = ({ user, children }) => {

  //   };
  //   <Route
  //     {...rest}
  //     element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
  //   />
  // );
};

export default ProtectedRoute;
