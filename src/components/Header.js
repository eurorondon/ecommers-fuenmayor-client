import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LocationOn } from "@mui/icons-material";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import TabMenu from "./TabMenu";
import { Colors } from "../utils/colors";
import SubMenu from "./SubMenu";

const Header = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [searchInput, setSearchInput] = React.useState("");
  const { cartItems } = useSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState(cartItems.length);
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    if (currentUrl === "/") {
      setActiveButton(0);
    }
    if (currentUrl === "/categories") {
      setActiveButton(1);
    }
    if (currentUrl === "/ofertas") {
      setActiveButton(2);
    }
    if (currentUrl === "/destacados") {
      setActiveButton(3);
    }
    if (currentUrl === "/perfil" || currentUrl === "/auth") {
      setActiveButton(4);
    }
  }, [currentUrl]);

  React.useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scroll(0, 0);
    if (searchInput) {
      navigate(`/search/${searchInput}`);
      setSearchInput("");
    }
  };

  return (
    <>
      <div>
        {/* Top Header */}
        <div className=" " style={{ backgroundColor: Colors.Cprimary }}>
          <div className="container">
            <div className="row">
              {window.innerWidth < 768 ? (
                <p
                  className="text-white text-center"
                  style={{ fontSize: "0.7rem" }}
                >
                  <LocationOn style={{ fontSize: "0.9rem" }} />
                  Barquisimeto- Edo, Lara
                </p>
              ) : (
                <p
                  className="text-white text-center"
                  style={{ fontSize: "1rem" }}
                >
                  <LocationOn />
                  Carrera23, calles 37 y 38, Barquisimeto - Lara
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Header */}
        <div
          className="header"
          style={{
            backgroundColor: "#ffeeee",
          }}
        >
          <div className="container">
            {/* MOBILE HEADER */}
            <div className="mobile-header">
              <div className="">
                <div className=" row   ">
                  <div className="col-2  d-flex justify-content-center align-items-center ">
                    <Link className=" " to="/">
                      <div
                        className="bg-white rounded-circle p-1 "
                        style={{ minHeight: "50px", minWidth: "50px" }}
                      >
                        <img
                          alt="logo"
                          src="/images/logo.png"
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="col-9 d-flex mt-2">
                    <form className="input-group" onSubmit={handleSubmit}>
                      <input
                        type="search"
                        className="form-control rounded-left search"
                        placeholder="Buscar..."
                        onChange={(e) => setSearchInput(e.target.value)}
                        style={{
                          borderTopLeftRadius: "50px",
                          borderBottomLeftRadius: "50px",
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                        }}
                      />
                      <button type="submit" className="search-button">
                        <SearchIcon />
                      </button>
                    </form>
                  </div>
                  <div className="col-1   d-flex align-items-center justify-content-center  Login-Register">
                    <Link to="/cart" className="cart-mobile-icon ">
                      <i
                        className="fas fa-shopping-bag me-3"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      {cartCount > 0 && (
                        <div
                          className="badge d-flex justify-center align-items-center"
                          style={{ fontSize: "0.8rem" }}
                        >
                          <span className="mx-auto">{cartCount}</span>
                        </div>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* PC HEADER */}
            <div className="pc-header py-2">
              <div className="row">
                <div className="col-md-3 col-4 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <div className="rounded rounded-circle">
                      <img
                        alt="logo"
                        src="/images/logo.jpg"
                        className="rounded-circle"
                        style={{ maxWidth: "10rem" }}
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-8 d-flex align-items-center">
                  <form className="input-group" onSubmit={handleSubmit}>
                    <input
                      type="search"
                      className="form-control rounded-left search"
                      placeholder="Buscar..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />

                    <button
                      type="search"
                      className="search-button"
                      // style={{ backgroundColor: "#1cb803" }}
                    >
                      <SearchIcon />
                    </button>
                  </form>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                  <Link to="/cart">
                    <i
                      className="fas fa-shopping-bag me-3 text-white"
                      style={{ fontSize: "1.1rem" }}
                    ></i>
                    <span className="badge">{cartCount}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-white pc-header py-2 "
          style={{ backgroundColor: "#1A2339" }}
        >
          <div className="container d-flex justify-content-start gap-5">
            <h5>Categorias</h5>
            <h5>Contacto</h5>
            <h5>Top Seller</h5>
          </div>
        </div>
      </div>
      <SubMenu />
      <TabMenu activeButton={activeButton} />
    </>
  );
};

export default Header;
