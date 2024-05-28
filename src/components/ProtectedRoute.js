import { getCurrentUser } from "aws-amplify/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Splash from "../screens/Splash";
import { setUser } from "../features/auth/UserSlice";
import { singleUser } from "../utils/graphqlFunctions";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log("checa que esto sea user ", user);

  console.log(user);

  React.useEffect(() => {
    (async () => {
      try {
        const attributes = await getCurrentUser();
        const user = await singleUser(attributes.userId);
        dispatch(setUser(user));

        // setIsLoading(false);
        console.log(attributes);
      } catch (error) {
        console.log(error.message);
        // setIsLoading(false);
      }
    })();
  }, []);

  // if (isLoading) return <Splash setIsLoading={setIsLoading} />;

  // const userId = useSelector((state) => state.auth.user.userId);
  if (!user.id) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
