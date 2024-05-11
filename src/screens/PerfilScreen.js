import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function PerfilScreen() {
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="d-flex align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <div className=" alert alert-info text-center mt-3">
            Cliente no Registrado
            <Link
              className="btn btn-success mx-5 px-5 py-3"
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
    </div>
  );
}

export default PerfilScreen;
