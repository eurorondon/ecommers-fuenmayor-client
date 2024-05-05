import React from "react";
import Header from "../components/Header";

import ShopSections from "../components/homeComponents/ShopSection/ShopSection";
import Ofertas from "../components/Ofertas/Ofertas";
import Destacados from "../components/Destacados/Destacados";
import CategoriesResultItemes from "../components/homeComponents/ShopSection/CategoriesResultItems";

export default function CategoriesResult() {
  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Header />
      </div>
      {/* <Categorias /> */}
      <CategoriesResultItemes />
      <div style={{ margin: "70px" }}></div>

      <div style={{ overflow: "hidden" }}>
        <Ofertas />
      </div>

      <div style={{ margin: "70px", overflow: "hidden" }}></div>
      <Destacados />
    </div>
  );
}
