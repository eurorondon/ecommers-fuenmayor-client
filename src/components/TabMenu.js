import React, { useEffect, useState } from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import { useNavigate } from "react-router-dom";
import { Colors } from "../utils/colors";

function TabMenu({ activeButton }) {
  const navigate = useNavigate();
  const [showObject, setShowObject] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const triggerHeight = 200; // Altura de desencadenamiento en píxeles

      if (scrollPosition > triggerHeight) {
        setShowObject(true);
      } else {
        setShowObject(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = async (path) => {
    await new Promise((resolve) => {
      window.scroll(0, 0);
      // Resuelve la promesa después de un breve retraso para asegurarse de que el desplazamiento se complete
      setTimeout(resolve, 100); // Puedes ajustar el tiempo según sea necesario
    });
    navigate(path);
  };

  return (
    <div className="" style={{ backgroundColor: "#eef8ff" }}>
      {
        <div
          className="py-2    "
          style={{
            bottom: "0px",
            width: "100%",
          }}
        >
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className="col      "
              // style={
              //   activeButton === 0
              //     ? { backgroundColor: "white", borderRadius: "0.25rem" }
              //     : {}
              // }
            >
              <div
                onClick={() => handleNavigate("/")}
                className="col "
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <OtherHousesOutlinedIcon
                  style={
                    activeButton === 0
                      ? { color: Colors.Ccuarto, fontSize: "20px" }
                      : { color: "", fontSize: "20px" }
                  }
                />
                <span
                  style={
                    activeButton === 0
                      ? { fontSize: "10px", color: Colors.Ccuarto }
                      : { fontSize: "10px", color: "" }
                  }
                >
                  Home
                </span>
              </div>
            </div>
            <div
              className="col rounded   "
              style={
                activeButton === 1
                  ? { backgroundColor: "", borderRadius: "0.25rem" }
                  : {}
              }
            >
              <div
                onClick={() => handleNavigate("/categories")}
                className=" "
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CategoryOutlinedIcon
                  style={
                    activeButton === 1
                      ? { color: Colors.Ccuarto, fontSize: "20px" }
                      : { color: "", fontSize: "20px" }
                  }
                />
                {/* <span className="" style={{ fontSize: "10px", color: "" }}> */}
                <span
                  className=""
                  style={
                    activeButton === 1
                      ? { fontSize: "10px", color: Colors.Ccuarto }
                      : { fontSize: "10px", color: "" }
                  }
                >
                  Categorias
                </span>
              </div>
            </div>
            {/* <div>Cupon</div> */}
            <div
              className="col      "
              style={
                activeButton === 2
                  ? { backgroundColor: "", borderRadius: "0.25rem" }
                  : {}
              }
            >
              <div
                onClick={() => handleNavigate("/ofertas")}
                className=" "
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocalOfferOutlinedIcon
                  style={
                    activeButton === 2
                      ? { color: Colors.Ccuarto, fontSize: "20px" }
                      : { color: "", fontSize: "20px" }
                  }
                />
                {/* <span className="" style={{ fontSize: "10px", color:  }}> */}
                <span
                  className=""
                  style={
                    activeButton === 2
                      ? { fontSize: "10px", color: Colors.Ccuarto }
                      : { fontSize: "10px", color: "" }
                  }
                >
                  Ofertas
                </span>
              </div>
            </div>
            <div
              className="col     "
              style={
                activeButton === 3
                  ? { backgroundColor: "", borderRadius: "0.25rem" }
                  : {}
              }
            >
              <div
                onClick={() => handleNavigate("/destacados")}
                className=" "
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BookmarkAddOutlinedIcon
                  style={
                    activeButton === 3
                      ? { color: Colors.Ccuarto, fontSize: "20px" }
                      : { color: "", fontSize: "20px" }
                  }
                />
                {/* <span className="" style={{ fontSize: "10px", color:  }}> */}
                <span
                  className=""
                  style={
                    activeButton === 3
                      ? { fontSize: "10px", color: Colors.Ccuarto }
                      : { fontSize: "10px", color: "" }
                  }
                >
                  +Vendidos
                </span>
              </div>
            </div>
            <div
              className="col"
              style={
                activeButton === 4
                  ? { backgroundColor: "", borderRadius: "0.25rem" }
                  : {}
              }
            >
              <div
                onClick={() => handleNavigate("/perfil")}
                className=" "
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Person2OutlinedIcon
                  style={
                    activeButton === 4
                      ? { color: Colors.Ccuarto, fontSize: "20px" }
                      : { color: "", fontSize: "20px" }
                  }
                />
                {/* <span className="" style={{ fontSize: "10px", color: "" }}> */}
                <span
                  className=""
                  style={
                    activeButton === 4
                      ? { fontSize: "10px", color: Colors.Ccuarto }
                      : { fontSize: "10px", color: "" }
                  }
                >
                  Perfil
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default TabMenu;
