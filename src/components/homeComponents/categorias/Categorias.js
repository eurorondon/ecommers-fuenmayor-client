import React from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../features/categories/categorySlice";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import amplifyconfig from "../../../aws-exports";
import { listCategories } from "../../../graphql/queries";
import { getCategories } from "../../../utils/graphqlFunctions";
import CategoriasMenorA5 from "./CategoriasMenorA5";
import CategoriasMayorA5 from "./CategoriasMayorA5";
import CategoriasMobile from "./CategoriasMobile";
import CatResponsive5 from "./CatResponsive5";
import CatResponsive6 from "./CatResponsive6";
import CatResponsive8 from "./CatResponsive8";
import CatTablet7 from "./CatTablet7";
import CatTablet8 from "./CatTablet8";
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
  const navigate = useNavigate();

  const [categories, setCategories] = React.useState([]);
  const {
    data: dataCategories,
    isError,
    error,
  } = useQuery(["AllCategories"], getCategories, {
    onSuccess: () => {
      setCategories(dataCategories);
    },
  });

  React.useEffect(() => {
    setCategories(dataCategories);
  }, [dataCategories]);

  const handleCategories = (category) => {
    window.scroll(0, 0);
    navigate(`/categories/${category.categoryName}`);
  };

  if (window.innerWidth > 1150)
    return (
      <>
        {categories?.length >= 5 ? (
          <CategoriasMayorA5
            categories={categories}
            handleCategories={handleCategories}
          />
        ) : (
          <CategoriasMenorA5
            categories={categories}
            handleCategories={handleCategories}
          />
        )}
      </>
    );
  if (window.innerWidth < 1150 && window.innerWidth > 768)
    return categories?.length < 5 ? (
      <CategoriasMenorA5
        categories={categories}
        handleCategories={handleCategories}
      />
    ) : categories?.length === 7 ? (
      <CatTablet7 categories={categories} handleCategories={handleCategories} />
    ) : categories?.length === 8 ? (
      <CatTablet8 categories={categories} handleCategories={handleCategories} />
    ) : (
      <CategoriasMayorA5
        categories={categories}
        handleCategories={handleCategories}
      />
    );
  if (window.innerWidth < 769 && categories?.length > 1) if (isError) return;
  <div class="alert alert-danger" role="alert">
    {error?.message}
  </div>;

  return (
    <>
      {categories.length === 5 ? (
        <CatResponsive5
          categories={categories}
          handleCategories={handleCategories}
        />
      ) : categories.length === 6 ? (
        <CatResponsive6
          categories={categories}
          handleCategories={handleCategories}
        />
      ) : categories.length === 8 ? (
        <CatResponsive8
          categories={categories}
          handleCategories={handleCategories}
        />
      ) : (
        <CategoriasMobile
          categories={categories}
          handleCategories={handleCategories}
        />
      )}
    </>
  );
};

export default Categorias;
