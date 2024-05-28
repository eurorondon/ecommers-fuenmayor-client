import React from "react";
import MyButton from "./MyButton";
import MyInputs from "./MyInputs";
import MyText from "./MyText";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthState,
  setEmail,
  setLoading,
  setVerificationCode,
} from "../features/auth/AuthSlice";
import {
  confirmSignUp,
  signIn,
  resendSignUpCode,
  getCurrentUser,
} from "aws-amplify/auth";
import { Password } from "@mui/icons-material";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { userFromDb } from "../utils/graphqlFunctions";
import { setUser } from "../features/auth/UserSlice";

const ConfirmSignUp = () => {
  const { email, verificationCode, password, fullName, phoneNumber } =
    useSelector((state) => state.auth);
  const userstate = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(verificationCode);

  async function handleConfirmSignUp() {
    if (!verificationCode) {
      alert("Please Enter an Verification Code");
      return;
    }
    try {
      dispatch(setLoading(true));
      await confirmSignUp({
        username: email,
        confirmationCode: verificationCode,
      });

      alert("Confirmed, you can now sign in");
      await signIn({ username: email, password });
      dispatch(setLoading(false));
      dispatch(setAuthState("signed"));
      const attributes = await getCurrentUser();
      const user = {
        id: attributes.userId,
        fullName,
        email: attributes.signInDetails.loginId,
        phoneNumber,
      };
      console.log(user);
      await userFromDb(user);
      dispatch(setUser(user));
      navigate("/");
    } catch (error) {
      alert(error.message);
      dispatch(setLoading(false));
      console.log(error);
      return;
    }
  }

  async function handleResendVErificationCode() {
    try {
      await resendSignUpCode({ username: email });
      alert("se ha reenviado el codigo");
    } catch (error) {}
  }

  return (
    <>
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
          onPress={handleResendVErificationCode}
          variant="secondary"
        />
        <MyButton
          title={"Atras"}
          // disabled={isLoading}
          onPress={() => {
            dispatch(setAuthState("signUp"));
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
