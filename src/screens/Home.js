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

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listProductListFuenmayors } from "../graphql/queries";
import amplifyconfig from "../amplifyconfiguration.json";
Amplify.configure(amplifyconfig);
const client = generateClient();

// import GridProductList from "../components/homeComponents/GridProductList";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const { isLoading } = useSelector((state) => state.products);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const productsData = await client.graphql({
        query: listProductListFuenmayors,
        variables: {
          // limit: 10,
          filter: { nombre: { contains: "" } },
        },
      });
      const products = productsData;

      setProducts(products);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }
  console.log(products.data?.listProductListFuenmayors?.items);

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
