import React from "react";
import ShopSections from "../components/homeComponents/ShopSection/ShopSection";
import Header from "../components/Header";
import Categorias from "../components/homeComponents/Categorias";
import { useSelector } from "react-redux";
import Portada from "../components/homeComponents/Portada";
import Whatsapp from "../components/homeComponents/Whatsapp";
import NewProducts from "../components/NewProducts/NewProducts";
import Ofertas from "../components/Ofertas/Ofertas";
import Destacados from "../components/Destacados/Destacados";

// import GridProductList from "../components/homeComponents/GridProductList";

const Home = () => {
  const { isLoading } = useSelector((state) => state.products);

  // console.log(products.data?.listProductListFuenmayors?.items);

  return (
    <div className="bg-neutral-100" style={{ overflow: "hidden" }}>
      <Header />
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
