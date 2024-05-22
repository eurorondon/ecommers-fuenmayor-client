import React from "react";
import MyButton from "./MyButton";
import MyInputs from "./MyInputs";
import MyText from "./MyText";
import { Colors } from "../utils/colors";
import { AuthContext } from "../context/AuthContext";

const ConfirmSignUp = () => {
  const { email, setEmail, setVerificationCode, handleConfirmSignUp } =
    React.useContext(AuthContext);

  return (
    <div style={styles.container}>
      <MyText type="title">Confirm Sign Up</MyText>
      <MyInputs value={email} label={"Email"} onChange={setEmail} />
      <MyInputs label={"Code"} onChange={setVerificationCode} secureTextEntry />
      <MyButton title={"Confirm"} onPress={handleConfirmSignUp} />
      <MyText type={"button"}>Re-send code</MyText>
    </div>
  );
};

export default ConfirmSignUp;

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
