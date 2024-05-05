import React from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../features/categories/categorySlice";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import amplifyconfig from "../../../aws-exports";
import { listCategories } from "../../../graphql/queries";
import { getCategories } from "../../../utils/graphqlFunctions";
import CategoriasMenorA5 from "./CategoriasMenorA5";
import CategoriasMayorA5 from "./CategoriasMayorA5";
Amplify.configure(amplifyconfig);

const categories = [
  // {
  //   name: "Conservador",
  //   products: 8,
  //   imageUrl: "/images/cocina.png",
  // },
  // {
  //   name: "Mujer",
  //   products: 12,
  //   imageUrl: "/images/belleza.png",
  // },
  // {
  //   name: "Contenedor",
  //   products: 12,
  //   imageUrl: "/images/contenedores.png",
  // },
  // {
  //   name: "Electricos",
  //   products: 12,
  //   imageUrl: "/images/limpieza.png",
  // },
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
  // {
  //   name: "Coleccionables",
  //   products: 12,
  //   imageUrl: "/images/coleccionables.png",
  // },
  // {
  //   name: "Coleccionables",
  //   products: 12,
  //   imageUrl: "/images/coleccionables.png",
  // },
];

const Categorias = () => {
  const [categories, setCategories] = React.useState([]);
  const { data: dataCategories, error } = useQuery(
    ["AllCategories"],
    getCategories,
    {
      onSuccess: () => {
        console.log("dataCategories");
        setCategories(dataCategories);
      },
    }
  );

  React.useEffect(() => {
    setCategories(dataCategories);
  }, [dataCategories]);

  const handleCategories = (category) => {
    window.scroll(0, 0);
  };

  if (window.innerWidth > 1150)
    return (
      <>
        {categories?.length > 5 ? (
          <CategoriasMayorA5 categories={categories} />
        ) : (
          <CategoriasMenorA5 categories={categories} />
        )}
      </>
    );
  if (window.innerWidth < 1150 && window.innerWidth > 768)
    return (
      // <div className="" style={{ backgroundColor: "#040915", color: "white" }}>
      //   <div
      //     className="py-4"
      //     style={{
      //       display: "flex",
      //       justifyContent: "center",
      //       backgroundColor: "",
      //     }}
      //   >
      //     {categories?.slice(0, 4).map((category, index) => (
      //       <div key={index} style={{ margin: "10px", textAlign: "center" }}>
      //         <Link
      //           to={`/categories/${category.categoryName}`}
      //           onClick={() => handleCategories(category.name)}
      //           style={{
      //             width: "120px",
      //             height: "120px",
      //             borderRadius: "50%",
      //             backgroundColor: "#CCCCCC",
      //             display: "flex",
      //             alignItems: "center",
      //             justifyContent: "center",
      //             flexDirection: "column",
      //             overflow: "hidden",
      //           }}
      //         >
      //           <img
      //             src={
      //               category.photo
      //                 ? category.photo[0].url
      //                 : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
      //             }
      //             alt={category.categoryName}
      //             style={{ maxWidth: "100%", maxHeight: "100%" }}
      //           />
      //         </Link>
      //         <h5>{category.categoryName}</h5>
      //         <div style={{ marginTop: "10px" }}>{category.name}</div>
      //       </div>
      //     ))}
      //   </div>
      //   <div
      //     style={{
      //       display: "flex",
      //       justifyContent: "center",
      //       // backgroundColor: "#D8EAF2",
      //     }}
      //   >
      //     {categories?.slice(4, 8).map((category, index) => (
      //       <div key={index} style={{ margin: "10px", textAlign: "center" }}>
      //         <Link
      //           to={`/categories/${category.categoryName}`}
      //           onClick={() => handleCategories(category.name)}
      //           style={{
      //             width: "120px",
      //             height: "120px",
      //             borderRadius: "50%",
      //             backgroundColor: "#CCCCCC",
      //             display: "flex",
      //             alignItems: "center",
      //             justifyContent: "center",
      //             flexDirection: "column",
      //             overflow: "hidden",
      //           }}
      //         >
      //           <img
      //             src={
      //               category.photo
      //                 ? category.photo[0].url
      //                 : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
      //             }
      //             alt={category.categoryName}
      //             style={{ maxWidth: "100%", maxHeight: "100%" }}
      //           />
      //         </Link>
      //         <h5>{category.categoryName}</h5>
      //         <div style={{ marginTop: "10px" }}>{category.name}</div>
      //       </div>
      //     ))}
      //   </div>
      // </div>
      <CategoriasMenorA5 categories={categories} />
    );
  if (window.innerWidth < 769 && categories?.length > 1)
    return (
      <>
        <div
          className=" py-3"
          style={{ backgroundColor: "#040915", color: "white" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              // backgroundColor: "#D8EAF2",
              margin: "10px 0px",
            }}
          >
            {categories?.slice(0, 4).map((category, index) => (
              <div
                className=""
                key={index}
                style={{ margin: "5px", textAlign: "center" }}
              >
                <Link
                  className=" mx-auto"
                  to={`/categories/${category.categoryName}`}
                  onClick={() => handleCategories(category.name)}
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
                    src={
                      category.photo
                        ? category.photo[0].url
                        : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
                    }
                    alt={category.categoryName}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Link>
                <span className="" style={{ fontSize: "0.8rem" }}>
                  {category.categoryName}
                </span>
                <div className="" style={{ marginTop: "" }}>
                  {category.name}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center  ",
              // backgroundColor: "#D8EAF2",
            }}
          >
            {categories?.slice(4, 8).map((category, index) => (
              <div key={index} style={{ margin: "5px", textAlign: "center" }}>
                <Link
                  className="mx-auto"
                  to={`/categories/${category.categoryName}`}
                  onClick={() => handleCategories(category.name)}
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
                    src={
                      category.photo
                        ? category.photo[0].url
                        : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
                    }
                    alt={category.categoryName}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Link>
                <span style={{ fontSize: "0.8rem" }}>
                  {category.categoryName}
                </span>
                <div style={{ marginTop: "" }}>{category.name}</div>
              </div>
            ))}
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4"></div>
        </div>
      </>
    );
};

export default Categorias;
