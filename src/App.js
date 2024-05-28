import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";
import CartScreen from "./screens/CartScreen";
import CategoriesResult from "./screens/CategoriesResult";
import SearchResult from "./screens/SearchResult";
import ModalCategories from "./components/ModalCategories";
import GridCategories from "./components/homeComponents/categorias/GridCategories";
import OfertaScreen from "./screens/OfertaScreen";
import DestacadosScreen from "./screens/DestacadosScreen";
import PerfilScreen from "./screens/PerfilScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ConfirmSignUp from "./components/ConfirmSignUp";
import ForgotPassword from "./components/ForgotPassword";
import ConfirmForgotPassword from "./components/ConfirmForgotPassword";
import DefaultAuth from "./components/DefaultAuth";
import AuthScreen from "./screens/AuthScreen";
import Splash from "./screens/Splash";
import { setLoading } from "./features/auth/AuthSlice";
import React from "react";
import { resetUser, setUser } from "./features/auth/UserSlice";
import { singleUser } from "./utils/graphqlFunctions";
import { Hub } from "aws-amplify/utils";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const productsState = useSelector((state) => state.products);
  if (productsState.productList.length > 0) {
  }
  React.useEffect(() => {
    dispatch(setLoading(true));
  }, []);

  if (isLoading) return <Splash />;

  const listener = async (data) => {
    console.log(data);
    switch (data.payload.event) {
      case "signedIn":
        const attributes = data.payload.data;

        console.log("this are attributes", attributes);
        const user = await singleUser(attributes.userId);
        dispatch(setUser(user));
        console.log("user signed in from hub");
        break;
      case "signOut":
        dispatch(resetUser());
        console.log("user Signed out");
        break;
      default:
        break;
    }
  };

  Hub.listen("auth", listener);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<CategoriesResult />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart/:id?" element={<CartScreen />} />
        <Route path="/search/:search" element={<SearchResult />} />
        <Route path="/categories" element={<GridCategories />} />
        <Route path="/ofertas" element={<OfertaScreen />} />
        <Route path="/destacados" element={<DestacadosScreen />} />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <PerfilScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<AuthScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
