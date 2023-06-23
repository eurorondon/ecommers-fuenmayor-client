import React from "react";
import ShopSections from "../components/homeComponents/ShopSection/ShopSection";
import Header from "../components/Header";
import Categorias from "../components/homeComponents/Categorias";
import NewProducts from "../components/homeComponents/NewProducts/NewProducts";
import Destacados from "../components/homeComponents/Destacados/Destacados";
import Ofertas from "../components/homeComponents/Ofertas/Ofertas";
import { useSelector } from "react-redux";
import Portada from "../components/homeComponents/Portada";
import Whatsapp from "../components/homeComponents/Whatsapp";

// import GridProductList from "../components/homeComponents/GridProductList";

const Home = () => {
  const { isLoading } = useSelector((state) => state.products);

  return (
    <div className="bg-neutral-100">
      <Header />
      <Portada />
      <Categorias />
      <NewProducts />
      <Ofertas />
      <Destacados />
      {isLoading ? null : <></>}
      <ShopSections />
      <Whatsapp />
    </div>
  );
};

export default Home;
