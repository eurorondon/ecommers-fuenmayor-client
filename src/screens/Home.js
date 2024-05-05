import React from "react";
import ShopSections from "../components/homeComponents/ShopSection/ShopSection";
import Header from "../components/Header";

import { useSelector } from "react-redux";
import Portada from "../components/homeComponents/Portada";
import Whatsapp from "../components/homeComponents/Whatsapp";
import NewProducts from "../components/NewProducts/NewProducts";
import Ofertas from "../components/Ofertas/Ofertas";

import Destacados from "../components/Destacados/Destacados";
import Categorias from "../components/homeComponents/categorias/Categorias";

const Home = () => {
  const { isLoading } = useSelector((state) => state.products);

  // console.log(products.data?.listProductListFuenmayors?.items);

  return (
    <div className="bg-neutral-100">
      <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Header />
      </div>
      <Portada />
      <Categorias />
      <Ofertas />
      <NewProducts />
      <Destacados />
      {isLoading ? null : <></>}
      <ShopSections />
      <Whatsapp />
    </div>
  );
};

export default Home;
