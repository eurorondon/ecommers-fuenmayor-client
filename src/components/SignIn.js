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
  setPassword,
} from "../features/auth/AuthSlice";

import {
  confirmSignUp,
  signIn,
  signUp,
  getCurrentUser,
} from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Usa el hook useNavigate

  const { email, password, isLoading } = useSelector((state) => state.auth);

  console.log(isLoading);

  async function handleSignIn() {
    if (!email || !password) {
      alert("Please Enter an Email and Password");
      return;
    }
    try {
      dispatch(setLoading(true));
      const user = await signIn({ username: email, password });
      console.log(user);
      dispatch(setLoading(false));
      dispatch(setAuthState("signedIn"));
      navigate("/");
    } catch (error) {
      alert(error.message);
      setLoading(false);
      console.log(error);
    }
  }

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  return (
    <>
      <div className="container" style={styles.container}>
        <div className="mt-5"></div>
        <MyText type="title" style={{ marginBottom: "20px" }}>
          Iniciar Sesion
        </MyText>
        <MyInputs
          label={"Email"}
          value={email}
          onChange={(value) => dispatch(setEmail(value))}
        />

        <MyInputs
          label={"Password"}
          onChange={(value) => dispatch(setPassword(value))}
          secureTextEntry
        />
        <div style={{ position: "relative" }}>
          <MyText
            onpress={() => dispatch(setAuthState("forgotPassword"))}
            type="button"
            style={{ position: "absolute", right: "5px", top: "-10px" }}
          >
            Olvide la Contraseña
          </MyText>
        </div>

        <div className="mt-4">
          <MyButton
            title={isLoading ? "Cargando..." : "Iniciar Sesion"}
            disabled={isLoading}
            onPress={handleSignIn}
          />
          <MyButton
            title={"Registrate"}
            disabled={isLoading}
            onPress={() => dispatch(setAuthState("signUp"))}
            variant="secondary"
          />
        </div>
        {/* <MyText
          type={"button"}
          onPress={() => {
            navigate("/");
          }}
        >
          HOME
        </MyText> */}
      </div>
    </>
  );
};

export default SignIn;

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
