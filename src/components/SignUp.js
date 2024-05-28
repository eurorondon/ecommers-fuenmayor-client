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
  setFullName,
  setLoading,
  setPassword,
  setPhoneNumber,
} from "../features/auth/AuthSlice";
import { signUp } from "aws-amplify/auth";
import Header from "./Header";
import { Margin } from "@mui/icons-material";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    email,
    password,
    isLoading,
    authState,
    confirmPassword,
    fullName,
    phoneNumber,
  } = useSelector((state) => state.auth);

  async function handleSignUp() {
    if (!email || !password) {
      alert("Por favor inserte correo y contraseña");
      return;
    }

    if (!fullName) {
      alert("Por favor inserte su Nombre Completo");
      return;
    }
    if (!phoneNumber) {
      alert("Por favor inserte numero de Telefono");
      return;
    }

    if (password !== confirmPassword) {
      alert(" Las contraseñas no coinciden");
      return;
    }
    try {
      dispatch(setLoading(true));
      const user = await signUp({
        username: email,
        password,
        options: { userAttributes: { name: fullName } },
      });
      console.log(user, password);
      dispatch(setLoading(false));

      dispatch(setAuthState("confirmSignUp"));
    } catch (error) {
      setLoading(false);
      alert(error.message);
      console.log(error);
      dispatch(setLoading(false));
    }
  }

  return (
    <>
      <div className="container" style={styles.container}>
        <div className="mt-2"></div>
        <MyText type="title">Registrate</MyText>
        <MyInputs
          label={"Email"}
          onChange={(value) => dispatch(setEmail(value))}
          value={email}
        />
        <MyInputs
          label={"Nombre Completo"}
          onChange={(value) => dispatch(setFullName(value))}
        />
        <MyInputs
          label={"Telefono"}
          onChange={(value) => dispatch(setPhoneNumber(value))}
        />
        <MyInputs
          label={"Contraseña"}
          onChange={(value) => dispatch(setPassword(value))}
          secureTextEntry
        />
        <MyInputs
          label={"Confirmar Contraseña"}
          onChange={(value) => dispatch(setConfirmPassword(value))}
          secureTextEntry
        />
        <MyButton
          title={isLoading ? "Cargando..." : "Registrate"}
          disabled={isLoading}
          onPress={handleSignUp}
        />
        <MyButton
          title={"Atras"}
          variant={"secondary"}
          onPress={() => {
            dispatch(setAuthState("defaultAuth"));
          }}
          disabled={isLoading}
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

export default SignUp;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",

    // justifyContent: "center",
    minHeight: "80vh",
    backgroundColor: "#fff",
  },
};
