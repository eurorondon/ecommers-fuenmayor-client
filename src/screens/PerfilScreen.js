import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/auth/AuthSlice";
import Splash from "./Splash";

function PerfilScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = React.useState(true);
  const [usuario, setUsuario] = React.useState(null);

  React.useEffect(() => {
    if (user) {
      setUsuario(user.signInDetails.loginId);
    }
  }, [user]);

  console.log(user.signInDetails.loginId);

  // React.useEffect(() => {
  //   // Cuando el componente se monta, actualiza el usuario en el store de Redux
  //   dispatch(setUser("EuritoLindo"));
  // }, [dispatch]);

  async function handleSignOut() {
    try {
      await signOut();
      navigate("/");
      dispatch(setUser(null));
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  if (isLoading)
    return <Splash setUser={setUser} setIsLoading={setIsLoading} />;
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "60vh" }}
        >
          <div
            className=" alert alert-info text-center mt-3"
            style={{ width: "100%" }}
          >
            <div className="mb-3">Hola {usuario}</div>
            <Link
              className="btn btn-success mx-5 px-5 py-2"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              Volver
            </Link>
          </div>
        </div>
      </div>

      <button onClick={handleSignOut}>Sign outsss</button>
    </div>
  );
}

export default withAuthenticator(PerfilScreen);
