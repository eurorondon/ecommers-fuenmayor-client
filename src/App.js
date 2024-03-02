import { useSelector } from "react-redux";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";
import CartScreen from "./screens/CartScreen";

function App() {
  const productsState = useSelector((state) => state.products);
  if (productsState.productList.length > 0) {
    // console.log(productsState);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Home />} />
        <Route path="/product/:id?" element={<SingleProduct />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart/:id?" element={<CartScreen />} />
        <Route path="/search/:search" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
