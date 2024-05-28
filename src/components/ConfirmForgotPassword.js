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
  setConfirmPassword,
  setEmail,
  setLoading,
  setPassword,
  setVerificationCode,
} from "../features/auth/AuthSlice";
import { confirmResetPassword, signUp } from "aws-amplify/auth";
import Header from "./Header";
import { Margin } from "@mui/icons-material";

const ConfirmForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    email,
    password,
    confirmPassword,
    isLoading,
    verificationCode,
    authState,
  } = useSelector((state) => state.auth);

  async function handleConfirmForgotPassword() {
    if (!verificationCode || verificationCode.length !== 6) {
      alert("Por favor inserte un codigo de verificacion valido");
      return;
    }
    if (!password) {
      alert("Por favor inserta contraseña");
      return;
    }
    if (!confirmPassword) {
      alert("Por favor confirma contraseña");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contrasenas no coinciden");
      return;
    }
    try {
      dispatch(setLoading(true));
      await confirmResetPassword({
        username: email,
        confirmationCode: verificationCode,
        newPassword: password,
      });
      dispatch(setLoading(false));
      alert("Reset de contrasena exitoso");
      dispatch(setAuthState("signIn"));
    } catch (error) {
      alert(error.message);
      dispatch(setLoading(false));
      console.log(error);
    }
  }

  return (
    <>
      <div className="container" style={styles.container}>
        <div className="mt-2"></div>
        <MyText type="title">Reset Contraseña</MyText>
        <MyInputs
          label={"Codigo de Verificacion"}
          onChange={(value) => dispatch(setVerificationCode(value))}
        />

        <MyInputs
          label={"Nueva Contraseña"}
          onChange={(value) => dispatch(setPassword(value))}
          secureTextEntry
        />
        <MyInputs
          label={"Confirmar Nueva Contraseña"}
          onChange={(value) => dispatch(setConfirmPassword(value))}
          secureTextEntry
        />
        <MyButton
          title={isLoading ? "Cargando..." : "Reset Contraseña"}
          onPress={handleConfirmForgotPassword}
        />
        <MyButton
          title={"Volver a Iniciar Sesion"}
          variant={"secondary"}
          onPress={() => dispatch(setAuthState("signIn"))}
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
    </>
  );
};

export default ConfirmForgotPassword;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",

    // justifyContent: "center",
    minHeight: "80vh",
    backgroundColor: "#fff",
  },
};
