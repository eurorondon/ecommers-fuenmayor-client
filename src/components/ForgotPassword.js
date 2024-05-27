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
  resetPassword,
} from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Usa el hook useNavigate

  const { email, password } = useSelector((state) => state.auth);

  const { isLoading } = useSelector((state) => state.auth);

  console.log(isLoading);

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Por favor inserte un correo");
      return;
    }
    try {
      dispatch(setLoading(true));
      await resetPassword({ username: email });
      dispatch(setAuthState("confirmForgotPassword"));
      dispatch(setLoading(false));
    } catch (error) {
      alert(error);
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="container" style={styles.container}>
        <div className="mt-5"></div>
        <MyText type="title" style={{ marginBottom: "20px" }}>
          Olvide la Contraseña
        </MyText>
        <MyInputs
          label={"Email"}
          value={email}
          onChange={(value) => dispatch(setEmail(value))}
        />

        <div className="mt-4">
          <MyButton
            title={isLoading ? "Enviando Codigo..." : "Recibir Codigo"}
            onPress={handleForgotPassword}
            disabled={isLoading}
          />
          <MyButton
            title={"Atras"}
            disabled={isLoading}
            onPress={() => {
              dispatch(setAuthState("signIn"));
            }}
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

export default ForgotPassword;

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
