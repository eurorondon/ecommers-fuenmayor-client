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

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Usa el hook useNavigate

  const { email, password } = useSelector((state) => state.auth);

  const { isLoading } = useSelector((state) => state.auth);

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
    navigate("/confirmforgotPassword");
  };

  return (
    <>
      <Header />
      <div className="container" style={styles.container}>
        <div className="mt-5"></div>
        <MyText type="title" style={{ marginBottom: "20px" }}>
          Olvide la Contraseña
        </MyText>
        <MyInputs
          label={"Email"}
          onChange={(value) => dispatch(setEmail(value))}
        />

        <div className="mt-4">
          <MyButton
            title={isLoading ? "Cargando..." : "Recibir Codigo"}
            onPress={handleForgotPassword}
          />
          <MyButton
            title={"Volver a Login"}
            disabled={isLoading}
            onPress={() => {
              navigate("/signup");
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
