import { getCurrentUser } from "aws-amplify/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUser } from "../features/auth/AuthSlice";
import Splash from "../screens/Splash";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = React.useState(true);
  console.log(user);
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const attributes = await getCurrentUser();
  //       dispatch(setUser(attributes));
  //       // setIsLoading(false);
  //       console.log(attributes);
  //     } catch (error) {
  //       console.log(error.message);
  //       // setIsLoading(false);
  //     }
  //   })();
  // }, []);

  if (isLoading) return <Splash setIsLoading={setIsLoading} />;

  // const userId = useSelector((state) => state.auth.user.userId);
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
