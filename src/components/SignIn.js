import React from "react";
import MyButton from "./MyButton";
import MyInputs from "./MyInputs";
import MyText from "./MyText";
import { Colors } from "../utils/colors";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const {
    setEmail,
    setPassword,
    handleSignIn,
    setAuthState,
    authState,
    email,
  } = React.useContext(AuthContext);

  console.log("the autestate is ", authState);

  return (
    <div style={styles.container}>
      <MyText type="title">Sign In</MyText>
      <MyInputs
        label={"Email"}
        value={"eurorondon03@gmail.com"}
        onChange={setEmail}
      />
      <MyInputs
        label={"Password"}
        value={"12345678"}
        onChange={setPassword}
        secureTextEntry
      />
      <MyButton title={"signIn"} onPress={handleSignIn} />
      <MyText
        type={"button"}
        onPress={() => {
          setAuthState("signUp");
        }}
      >
        SignUp
      </MyText>
    </div>
  );
};

export default SignIn;

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
