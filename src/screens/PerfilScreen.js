import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthState,
  setEmail,
  setPassword,
  setUser,
} from "../features/auth/AuthSlice";
import Splash from "./Splash";
import { resetUser } from "../features/auth/UserSlice";

function PerfilScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = React.useState(true);
  const [usuario, setUsuario] = React.useState(null);
  const { fullName, email, phoneNumber } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (user) {
      setUsuario(user.signInDetails.loginId);
    }
  }, [user]);

  console.log("this is usuario", user);

  // React.useEffect(() => {
  //   // Cuando el componente se monta, actualiza el usuario en el store de Redux
  //   dispatch(setUser("EuritoLindo"));
  // }, [dispatch]);

  async function handleSignOut() {
    try {
      await signOut();
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      dispatch(setUser(null));
      dispatch(setAuthState("defaultAuth"));
      dispatch(resetUser());
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
          <div className=" alert alert-info  mt-3" style={{ width: "100%" }}>
            <div className="mb-3">
              <div>
                <span>Nombre:{fullName}</span>
              </div>
              <div>
                <span>email:{email}</span>
              </div>
              <div>
                <span>Telefono:{phoneNumber}</span>
              </div>
            </div>
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

export default PerfilScreen;
