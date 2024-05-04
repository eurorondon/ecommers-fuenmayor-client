import React from "react";
import Header from "../components/Header";
import Categorias from "../components/homeComponents/Categorias";
import ShopSections from "../components/homeComponents/ShopSection/ShopSection";
import Ofertas from "../components/Ofertas/Ofertas";
import Destacados from "../components/Destacados/Destacados";
import CategoriesResultItemes from "../components/homeComponents/ShopSection/CategoriesResultItems";

export default function CategoriesResult() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      {/* <Categorias /> */}
      <CategoriesResultItemes />
      <div style={{ margin: "70px" }}></div>

      <Ofertas />

      <div style={{ margin: "70px" }}></div>
      <Destacados />
    </div>
  );
}
