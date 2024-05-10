import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../../utils/graphqlFunctions";
import { useQuery } from "@tanstack/react-query";
import Header from "../../Header";

function GridCategories() {
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
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default GridCategories;
