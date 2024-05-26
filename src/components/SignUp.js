import React from "react";
import MyButton from "./MyButton";
import MyInputs from "./MyInputs";
import MyText from "./MyText";
import { Colors } from "../utils/colors";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthState,
  setEmail,
  setLoading,
  setPassword,
} from "../features/auth/AuthSlice";
import { signUp } from "aws-amplify/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password } = useSelector((state) => state.auth);

  console.log(email);

  async function handleSignUp() {
    if (!email || !password) {
      alert("Please Enter an Email and Password");
      return;
    }
    try {
      dispatch(setLoading(true));
      const user = await signUp({ username: email, password });
      console.log(user, password);
      alert("user sign Up");
      dispatch(setLoading(false));
      setAuthState("confirmSignUp");
      navigate("/confirmsignup");
    } catch (error) {
      alert(error.message);
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div style={styles.container}>
      <div className="  " style={{ width: "25%" }}>
        <img
          alt="logo"
          src="/images/logo.jpg"
          className="rounded-circle img-fluid"
        />
      </div>
      <MyText type="title">Sign Up</MyText>
      <MyInputs
        label={"Email"}
        onChange={(value) => dispatch(setEmail(value))}
      />
      <MyInputs
        label={"Nombre Completo"}
        onChange={(value) => dispatch(setEmail(value))}
      />
      <MyInputs
        label={"Telefono"}
        onChange={(value) => dispatch(setEmail(value))}
      />
      <MyInputs
        label={"Contraseña"}
        onChange={(value) => dispatch(setPassword(value))}
        // secureTextEntry
      />
      <MyInputs
        label={"Confirmar Contraseña"}
        onChange={(value) => dispatch(setPassword(value))}
        // secureTextEntry
      />
      <MyButton title={"SIGN UP"} onPress={handleSignUp} />
      <MyButton
        title={"SIGN IN"}
        variant={"secondary"}
        onPress={() => {
          navigate("/signin");
        }}
      />
      {/* <MyText
        type={"button"}
        onPress={() => {
          navigate("/");
        }}
      >
        HOME
      </MyText> */}
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
