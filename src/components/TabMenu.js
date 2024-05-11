import React, { useEffect, useState } from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import { useNavigate } from "react-router-dom";

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

  const handleNavigate = (path) => {
    console.log(path);
    window.scroll(0, 0);
    navigate(path);
  };

  return (
    <div>
      {
        <div
          className="pt-2    "
          style={{
            // backgroundColor: "#040915",
            // position: "fixed",
            // borderTopRightRadius: "5px",
            // borderTopLeftRadius: "5px",
            bottom: "0px",
            width: "100%",
          }}
        >
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
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
                // fontSize="large"
                style={{ color: "#ffff", fontSize: "20px" }}
              />
              <span style={{ fontSize: "10px", color: "white" }}>Home</span>
            </div>
            <div
              className="col rounded   "
              style={
                activeButton === 1
                  ? { backgroundColor: "white", borderRadius: "0.25rem" }
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
                  // fontSize="large"
                  // style={{ color: "#007aff", fontSize: "25px" }}
                  style={
                    activeButton === 1
                      ? { color: "#007aff", fontSize: "20px" }
                      : { color: "#ffff", fontSize: "20px" }
                  }
                />
                {/* <span className="" style={{ fontSize: "10px", color: "#007aff" }}> */}
                <span
                  className=""
                  style={
                    activeButton === 1
                      ? { fontSize: "10px", color: "#007aff" }
                      : { fontSize: "10px", color: "#ffff" }
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
                  ? { backgroundColor: "white", borderRadius: "0.25rem" }
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
                  // fontSize="large"

                  // style={{ color: "#007aff", fontSize: "25px" }}
                  style={
                    activeButton === 2
                      ? { color: "#007aff", fontSize: "20px" }
                      : { color: "#ffff", fontSize: "20px" }
                  }
                />
                {/* <span className="" style={{ fontSize: "10px", color: "#007aff" }}> */}
                <span
                  className=""
                  style={
                    activeButton === 2
                      ? { fontSize: "10px", color: "#007aff" }
                      : { fontSize: "10px", color: "#ffff" }
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
                  ? { backgroundColor: "white", borderRadius: "0.25rem" }
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
                  // fontSize="large"

                  // style={{ color: "#007aff", fontSize: "25px" }}
                  style={
                    activeButton === 3
                      ? { color: "#007aff", fontSize: "20px" }
                      : { color: "#ffff", fontSize: "20px" }
                  }
                />
                {/* <span className="" style={{ fontSize: "10px", color: "#007aff" }}> */}
                <span
                  className=""
                  style={
                    activeButton === 3
                      ? { fontSize: "10px", color: "#007aff" }
                      : { fontSize: "10px", color: "#ffff" }
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
                  ? { backgroundColor: "white", borderRadius: "0.25rem" }
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
                  // fontSize="large"

                  // style={{ color: "#007aff", fontSize: "25px" }}
                  style={
                    activeButton === 4
                      ? { color: "#007aff", fontSize: "20px" }
                      : { color: "#ffff", fontSize: "20px" }
                  }
                />
                {/* <span className="" style={{ fontSize: "10px", color: "#007aff" }}> */}
                <span
                  className=""
                  style={
                    activeButton === 4
                      ? { fontSize: "10px", color: "#007aff" }
                      : { fontSize: "10px", color: "#ffff" }
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
