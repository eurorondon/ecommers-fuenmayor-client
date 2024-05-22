import React from "react";
import MyButton from "./MyButton";
import MyInputs from "./MyInputs";
import MyText from "./MyText";
import { Colors } from "../utils/colors";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const { setEmail, setPassword, handleSignUp, setAuthState } =
    React.useContext(AuthContext);

  return (
    <div style={styles.container}>
      <MyText type="title">Sign Up</MyText>
      <MyInputs label={"Email"} onChange={setEmail} />
      <MyInputs label={"Password"} onChange={setPassword} secureTextEntry />
      <MyButton title={"signIn"} onPress={handleSignUp} />
      <MyText
        type={"button"}
        onPress={() => {
          setAuthState("signIn");
        }}
      >
        SignIn
      </MyText>
    </div>
  );
};

export default SignUp;

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
