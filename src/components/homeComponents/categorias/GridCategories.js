import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../../utils/graphqlFunctions";
import { useQuery } from "@tanstack/react-query";
import Header from "../../Header";
import Loading from "../../Loading";

function GridCategories() {
  const navigate = useNavigate();

  const [categories, setCategories] = React.useState([]);
  const {
    data: dataCategories,
    error,
    isLoading,
  } = useQuery(["AllCategoriesGridScreen"], getCategories, {
    // refetchOnMount: false,
    // refetchInterval: false,
    // refetchOnWindowFocus: false,
    // refetchIntervalInBackground: false,
  });
  useEffect(() => {
    if (dataCategories) {
      setCategories(dataCategories);
    }
  }, [dataCategories]);

  const handleCategories = (category) => {
    window.scroll(0, 0);
    navigate(`/categories/${category.categoryName}`);
  };

  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Header />
      </div>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "70vh" }}
        >
          <div>
            <Loading />
          </div>
        </div>
      ) : (
        <div
          className=" container my-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "15px",
          }}
        >
          {categories?.map((category) => (
            <div
              onClick={() => handleCategories(category)}
              key={category.id}
              className=" shadow p-2 d-flex flex-column justify-content-start align-items-center "
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "8px",
              }}
            >
              <div className="  rounded  ">
                <img
                  src={
                    category.photo
                      ? category.photo[0].url
                      : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
                  }
                  alt={category.categoryName}
                  style={{ maxWidth: "100%" }}
                />
                <span>{category.categoryName}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GridCategories;
