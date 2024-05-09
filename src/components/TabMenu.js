import React from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

function TabMenu() {
  return (
    <>
      <div
        className="  py-1 "
        style={{
          backgroundColor: "#fff",
          position: "fixed",

          bottom: "0px",
          width: "100%",
        }}
      >
        <div
          className="mx-5"
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CategoryOutlinedIcon
              // fontSize="large"
              style={{ color: "#007aff", fontSize: "25px" }}
            />
            <span style={{ fontSize: "10px" }}>Categorias</span>
          </div>
          {/* <div>Cupon</div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MessageOutlinedIcon
              // fontSize="large"
              style={{ color: "#007aff", fontSize: "25px" }}
            />
            <span style={{ fontSize: "10px" }}>Mensaje</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabMenu;
