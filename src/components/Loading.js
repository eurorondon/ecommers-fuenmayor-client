import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className=" m-5 d-flex justify-content-center  ">
      <CircularProgress />
    </div>
  );
};

export default Loading;
