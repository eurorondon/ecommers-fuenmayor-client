import React, { useState } from "react";
import ShopSections from "../components/homeComponents/ShopSection/ShopSection";
import Header from "../components/Header";
import Portada from "../components/homeComponents/Portada";
import Whatsapp from "../components/homeComponents/Whatsapp";
import NewProducts from "../components/NewProducts/NewProducts";
import Ofertas from "../components/Ofertas/Ofertas";
import Destacados from "../components/Destacados/Destacados";
import Categorias from "../components/homeComponents/categorias/Categorias";
import AuthScreen from "./Auth";
import Splash from "./Splash";
import { Hub } from "aws-amplify/utils";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/auth/AuthSlice";

const Home = () => {
  // const { isLoading } = useSelector((state) => state.products);
  const [showModal, setShowModal] = useState(false);
  // const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const listener = (data) => {
    switch (data.payload.event) {
      case "signedIn":
        const attributes = data.payload.data;
        console.log("this are attributes", attributes);
        dispatch(setUser(attributes));
        setUser(attributes);
        console.log("user signed in from hub");
        break;
      case "signOut":
        setUser(null);
        console.log("user Signed out");
        break;
      default:
        break;
    }
  };

  Hub.listen("auth", listener);

  // console.log(products.data?.listProductListFuenmayors?.items);

  if (isLoading)
    return <Splash setUser={setUser} setIsLoading={setIsLoading} />;

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
      {/* <TabMenu setShowModal={setShowModal} /> */}
      <Whatsapp />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
};

export default Home;
