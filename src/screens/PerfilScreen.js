import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { withAuthenticator } from "@aws-amplify/ui-react";

function PerfilScreen() {
  const navigate = useNavigate();
  async function handleSignOut() {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
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
            <div className="mb-3">Cliente no Registrado</div>
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
