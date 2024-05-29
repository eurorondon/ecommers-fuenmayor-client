import React from "react";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/AuthSlice";
import { CircularProgress } from "@mui/material";

const Splash = ({ setIsLoading }) => {
  const dispath = useDispatch();
  React.useEffect(() => {
    (async () => {
      try {
        const attributes = await getCurrentUser();

        dispath(setUser(attributes));

        setIsLoading(false);
        console.log(attributes);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div style={styles.container}>
      <CircularProgress />
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
