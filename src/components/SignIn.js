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
  // const {
  //   setEmail,
  //   setPassword,
  //   handleSignIn,
  //   setAuthState,
  //   authState,
  //   email,
  // } = React.useContext(AuthContext);

  const { email, password } = useSelector((state) => state.auth);

  console.log(email);

  const user = useSelector((state) => state.auth.user);

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

  return (
    <>
      {/* <Header /> */}
      <div style={styles.container}>
        <MyText type="title">Sign In</MyText>
        <MyInputs
          label={"Email"}
          onChange={(value) => dispatch(setEmail(value))}
        />
        <MyInputs
          label={"Password"}
          onChange={(value) => dispatch(setPassword(value))}
          secureTextEntry
        />
        <MyButton title={"SIGN IN"} onPress={handleSignIn} />
        <MyButton
          title={"SIGN UP"}
          onPress={() => {
            navigate("/signup");
          }}
          variant="secondary"
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

export default SignIn;

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
