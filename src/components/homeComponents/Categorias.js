import React from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../features/categories/categorySlice";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Conservadores",
    products: 8,
    imageUrl: "/images/cocina.png",
  },
  {
    name: "Limpieza",
    products: 5,
    imageUrl: "/images/limpieza.png",
  },
  {
    name: "Aluminio",
    products: 12,
    imageUrl: "/images/aluminio.png",
  },
  {
    name: "Combos",
    products: 12,
    imageUrl: "/images/combos.png",
  },
  {
    name: "Hombres",
    products: 12,
    imageUrl: "/images/aluminio.png",
  },
  {
    name: "Mujer",
    products: 12,
    imageUrl: "/images/belleza.png",
  },
  {
    name: "Contenedor",
    products: 12,
    imageUrl: "/images/contenedores.png",
  },
  {
    name: "Electricos",
    products: 12,
    imageUrl: "/images/limpieza.png",
  },
  // {
  //   name: "Sonido",
  //   products: 12,
  //   imageUrl: "/images/sonido.png",
  // },

  // {
  //   name: "Coleccionables",
  //   products: 12,
  //   imageUrl: "/images/coleccionables.png",
  // },
  // Agrega más categorías según sea necesario
];

const Categorias = () => {
  const dispatch = useDispatch();

  const handleCategories = (category) => {
    console.log(category);
    // dispatch(setCategories(category));
  };

  if (window.innerWidth > 1150)
    return (
      <div
        className="py-5"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#040915",
          color: "white",
        }}
      >
        {categories.map((category, index) => (
          <div key={index} style={{ margin: "10px", textAlign: "center" }}>
            <Link
              to={`/categories/${category.name}`}
              onClick={() => handleCategories(category.name)}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#CCCCCC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Link>
            <div style={{ marginTop: "10px" }}>{category.name}</div>
          </div>
        ))}
      </div>
    );
  if (window.innerWidth < 1150 && window.innerWidth > 768)
    return (
      <div className="" style={{ backgroundColor: "#040915", color: "white" }}>
        <div
          className="py-4"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "",
          }}
        >
          {categories.slice(0, 4).map((category, index) => (
            <div key={index} style={{ margin: "10px", textAlign: "center" }}>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#CCCCCC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>{category.name}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "#D8EAF2",
          }}
        >
          {categories.slice(4, 8).map((category, index) => (
            <div key={index} style={{ margin: "10px", textAlign: "center" }}>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#CCCCCC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  if (window.innerWidth < 769)
    return (
      <div
        className=" py-3"
        style={{ backgroundColor: "#040915", color: "white" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "#D8EAF2",
            margin: "10px 0px",
          }}
        >
          {categories.slice(0, 4).map((category, index) => (
            <div key={index} style={{ margin: "5px", textAlign: "center" }}>
              <div
                style={{
                  width: "20vw",
                  height: "20vw",
                  borderRadius: "50%",
                  backgroundColor: "#CCCCCC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <div style={{ marginTop: "" }}>{category.name}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "#D8EAF2",
          }}
        >
          {categories.slice(4, 8).map((category, index) => (
            <div key={index} style={{ margin: "5px", textAlign: "center" }}>
              <div
                style={{
                  width: "20vw",
                  height: "20vw",
                  borderRadius: "50%",
                  backgroundColor: "#CCCCCC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <div style={{ marginTop: "" }}>{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Categorias;
