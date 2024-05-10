import React, { useEffect, useState } from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { useNavigate } from "react-router-dom";

function TabMenu({ setShowModal }) {
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

  const handleNavigate = (id) => {
    window.scroll(0, 0);
    navigate(`/categories`);
  };

  return (
    <div>
      {showObject && (
        <div
          className="  pt-3 pb-4  "
          style={{
            backgroundColor: "#040915",
            position: "fixed",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",

            bottom: "0px",
            width: "100%",
          }}
        >
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* <div
            className=" "
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <OtherHousesOutlinedIcon
              fontSize="large"
              style={{ color: "#007aff" }}
            />
            <span style={{ fontSize: "10px" }}>Home</span>
          </div> */}
            <div className="col-6   ">
              <div
                onClick={handleNavigate}
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
                  style={{ color: "#ffff", fontSize: "25px" }}
                />
                {/* <span className="" style={{ fontSize: "10px", color: "#007aff" }}> */}
                <span className="" style={{ fontSize: "10px", color: "#ffff" }}>
                  Categorias
                </span>
              </div>
            </div>
            {/* <div>Cupon</div> */}
            <div className="col-6      ">
              <div
                className=" "
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageOutlinedIcon
                  // fontSize="large"

                  // style={{ color: "#007aff", fontSize: "25px" }}
                  style={{ color: "#ffff", fontSize: "25px" }}
                />
                {/* <span className="" style={{ fontSize: "10px", color: "#007aff" }}> */}
                <span className="" style={{ fontSize: "10px", color: "#ffff" }}>
                  Mensaje
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TabMenu;
