import React from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { useDispatch, useSelector } from "react-redux";

import { singleUser } from "../utils/graphqlFunctions";
import { setUser } from "../features/auth/UserSlice";
import { setLoading } from "../features/auth/AuthSlice";

const Splash = () => {
  const dispath = useDispatch();
  React.useEffect(() => {
    (async () => {
      try {
        const attributes = await getCurrentUser();
        const user = await singleUser(attributes.userId);
        console.log("user desde spalsh", user);
        dispath(setUser(user));
        dispath(setLoading(false));
        // console.log(attributes);
      } catch (error) {
        console.log(error.message);
        dispath(setLoading(false));
      }
    })();
  }, []);

  return (
    <div style={styles.container}>
      <h1>...Cargando...</h1>
    </div>
  );
};

export default Splash;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
};
