import React from "react";

const Portada = () => {
  if (window.innerWidth < 576)
    return (
      <div className="py-4" style={{ backgroundColor: "#ffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-6 m-auto my-3 ">
              <div className="d-flex justify-content-center aling-items-center  ">
                <img
                  src="/images/portada.png"
                  style={{ maxWidth: "20rem" }}
                ></img>
              </div>
            </div>

            <div className="col-12  col-sm-6 d-flex flex-column justify-content-center aling-items-center container ">
              <div className=" ">
                <div className="text-start">
                  <h1 style={{ fontWeight: "bold" }}>Todo lo que necesitas</h1>
                </div>
                <h5>Los mejores articulos del hogar en tu tienda favorita</h5>
                <button className="btn btn-dark mt-3">Comprar Ahora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="py-3 " style={{ backgroundColor: "#ffff" }}>
      <div
        className={
          window.innerWidth < 768
            ? "mx-5  "
            : " container d-flex justify-content-center "
        }
      >
        <div
          className="d-flex  justify-content-center flex-column-reverse flex-md-row"
          style={
            window.innerWidth < 1200 ? { width: "100%" } : { width: "70%" }
          }
        >
          <div className="    d-flex flex-column justify-content-center align-items-center  container ">
            <div className=" ">
              <div className="text-start">
                <h2 style={{ fontWeight: "bold" }}>Todo lo que necesitas</h2>
              </div>
              <h4>Los mejores articulos del hogar en tu tienda favorita</h4>
              <button className="btn btn-dark mt-3">Comprar Ahora</button>
            </div>
          </div>
          <div className=" m-auto ">
            <div className="d-flex  justify-content-start  align-items-center ">
              <img
                src="/images/portada.png"
                style={{ maxWidth: "20rem" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portada;
