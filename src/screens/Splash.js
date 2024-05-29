import React from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/AuthSlice";
import { CircularProgress } from "@mui/material";

const Splash = ({ setIsLoading }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const attributes = await getCurrentUser();

        dispatch(setUser(attributes));
        setIsLoading(false);
        console.log(attributes);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [dispatch, setIsLoading]);

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
