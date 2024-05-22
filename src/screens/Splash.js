import React from "react";
import { getCurrentUser } from "aws-amplify/auth";

const Splash = ({ setIsLoading, setUser }) => {
  React.useEffect(() => {
    (async () => {
      try {
        const attributes = await getCurrentUser();
        console.log("splash", attributes);
        setUser(attributes);
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
