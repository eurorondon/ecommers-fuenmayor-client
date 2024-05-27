import React from "react";
import MyButton from "./MyButton";
import MyInputs from "./MyInputs";
import MyText from "./MyText";
import { Colors } from "../utils/colors";
import { AuthContext } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthState,
  setEmail,
  setLoading,
  setVerificationCode,
} from "../features/auth/AuthSlice";
import { confirmSignUp } from "aws-amplify/auth";
import { Password } from "@mui/icons-material";
import Header from "./Header";

const ConfirmSignUp = () => {
  const { email, verificationCode } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(verificationCode);

  async function handleConfirmSignUp() {
    if (!verificationCode) {
      alert("Please Enter an Verification Code");
      return;
    }
    try {
      dispatch(setLoading(true));
      const user = await confirmSignUp({
        username: email,
        confirmationCode: verificationCode,
      });
      console.log(user);
      alert("Confirmed, you can now sign in");
      dispatch(setLoading(false));
      dispatch(setAuthState("signIn"));
    } catch (error) {
      alert(error.message);
      dispatch(setLoading(false));
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <div className="container" style={styles.container}>
        <div className="mt-5"></div>
        <MyText type="title">Confirmar Registro</MyText>
        <MyInputs
          value={email}
          label={"Email"}
          onChange={(value) => dispatch(setEmail(value))}
        />
        <MyInputs
          label={"Code"}
          onChange={(value) => dispatch(setVerificationCode(value))}
          secureTextEntry
        />
        <MyButton title={"Confirmar"} onPress={handleConfirmSignUp} />
        <MyButton
          title={"Reenviar Codigo"}
          // disabled={isLoading}
          onPress={() => {
            // navigate("/signup");
          }}
          variant="secondary"
        />
      </div>
    </>
  );
};

export default ConfirmSignUp;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    minHeight: "80vh",
    backgroundColor: "#fff",
  },
};
