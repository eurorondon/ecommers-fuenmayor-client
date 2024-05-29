import React from "react";
import MyText from "./MyText";
import MyButton from "./MyButton";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState } from "../features/auth/AuthSlice";
import { Margin } from "@mui/icons-material";

function DefaultAuth() {
  const { isLoading, authState } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);
  console.log(authState);
  return (
    <div className="container" style={styles.container}>
      <MyText
        title="Hola Bienvenido"
        type="title"
        style={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        <div style={{}}>Entra y disfruta nuestras ofertas especiales</div>
      </MyText>
      <MyButton
        title={"Crear Cuenta"}
        onPress={() => dispatch(setAuthState("signUp"))}
      />
      <MyButton
        title={"Iniciar Sesion"}
        variant={"secondary"}
        onPress={() => dispatch(setAuthState("signIn"))}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "70vh",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default DefaultAuth;
