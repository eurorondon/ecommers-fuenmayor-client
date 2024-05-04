import React from "react";
import Header from "../components/Header";

import GridProductSearch from "../components/GridProductSearch";
import Ofertas from "../components/Ofertas/Ofertas";
import Destacados from "../components/Destacados/Destacados";

export default function SearchResult() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div className="container  " style={{ paddingTop: "10px" }}>
        <GridProductSearch />
        <div style={{ margin: "70px" }}></div>

        <Ofertas />

        <div style={{ margin: "70px" }}></div>
        <Destacados />
      </div>
    </div>
  );
}
