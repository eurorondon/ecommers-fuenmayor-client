import React from "react";
import Product from "./ProductGrid";
import { Link } from "react-router-dom";
import {
  useQueryClient,
  isError,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { getProducts } from "../../../api/productsApi";
import Loading from "../../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listProducts } from "../../../graphql/queries";
import amplifyconfig from "../../../amplifyconfiguration.json";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../../features/categories/categorySlice";

Amplify.configure(amplifyconfig);
const client = generateClient();

const GridProductList = () => {
  const [products, setProducts] = React.useState([]);
  // const [categories, setCategories] = React.useState("");

  const dispatch = useDispatch();

  const handleDeleteCategories = () => {
    dispatch(setCategories(""));
  };

  const { category: categorystate, search } = useSelector(
    (state) => state.categories
  );

  console.log("El estado de la categoria es:", categorystate);
  console.log("El estado de SEARCH es:", search);

  const { data, isLoading, isFetching, isError, refetch } = useQuery(
    ["listProducts"],
    async () => {
      try {
        const filter = {
          ...(categorystate !== ""
            ? { categories: { contains: categorystate } }
            : {}),
          ...(search !== "" ? { name: { contains: search } } : {}),
        };
        const productsData = await client.graphql({
          query: listProducts,
          variables: {
            limit: 20,
            filter,
          },
        });

        return productsData.data.listProducts.items;
      } catch (err) {
        console.error("Error fetching todos", err.errors);
        throw err;
      }
    },
    {
      onSuccess: (data) => {
        setProducts(data);
      },
    }
  );

  React.useEffect(() => {
    refetch();
  }, [categorystate, refetch, search]);

  // React.useEffect(() => {
  //   if (categories !== "") {
  //     queryClient.invalidateQueries({ queryKey: ["listProducts"] });
  //   }
  // }, [categories, queryClient]);

  // async function fetchProducts() {
  //   try {
  //     const productsData = await client.graphql({
  //       query: listProductListFuenmayors,
  //       variables: {
  //         limit: 20,
  //         filter: { nombre: { contains: "" } },
  //       },
  //     });
  //     const products = productsData;

  //     setProducts(products.data.listProductListFuenmayors.items);
  //   } catch (err) {
  //     console.log("error fetching todos", err);
  //   }
  // }
  // console.log(products.data?.listProductListFuenmayors?.items);
  // const { data, isLoading, error, hasNextPage, fetchNextPage } =
  //   useInfiniteQuery(
  //     ["infinity-products"],
  //     ({ pageParam = 0 }) =>
  //       getProducts(`/api/products?pageNumber=${pageParam}`),

  //     {
  //       getNextPageParam: (lastPage) => {
  //         if (lastPage.page === lastPage.pages) return false;
  //         return lastPage.page + 1;
  //       },
  //     }
  //   );

  // const productList =
  //   data?.pages.reduce(
  //     (prevProducts, page) => prevProducts.concat(page.products),
  //     []
  //   ) ?? [];

  // const productList = data?.pages.flatMap((page) => page.products) ?? [];

  if (isFetching || isLoading)
    return (
      <div style={{ minHeight: "50vh" }}>
        <h1>Cargando...</h1>
        <Loading />
      </div>
    );
  if (data.length < 1)
    return (
      <div style={{ minHeight: "50vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1>Sin Resultados </h1>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => handleDeleteCategories()}
          >
            X
          </button>
        </div>
      </div>
    );

  return (
    <>
      {categorystate && (
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <h3 className="" style={{ margin: "20px" }}>
            Filtrando por categoria : {categorystate}
          </h3>
          <button onClick={() => handleDeleteCategories()}>X</button>
        </div>
      )}

      <div className=" grid mx-auto " style={{ minHeight: "50vh" }}>
        {products?.map((product) => (
          <div key={product.id}>
            {/* {console.log(product)} */}
            <Link to={`/products/${product._id}`}>
              <Product
                url={
                  product.photo && product.photo[0]
                    ? product.photo[0].url
                    : null
                }
                name={product.name}
                description={product.departamento}
                price={product.price}
              />
            </Link>
          </div>
        ))}
      </div>
    </>

    // <>
    //   <h2>Todos los Articulos</h2>
    //   <InfiniteScroll
    //     dataLength={productList.length}
    //     hasMore={hasNextPage}
    //     next={() => fetchNextPage()}
    //     loader={
    //       <div className="mx-auto">
    //         <Loading />
    //       </div>
    //     }
    //   >
    //     <div className=" grid mx-auto ">
    //       {products?.map((product) => (
    //         <div key={product._id}>
    //           <Link to={`/products/${product._id}`}>
    //             <Product
    //               // url={product.photo[0].url}
    //               name={product.nombre}
    //               description={product.description}
    //               price={product.price}
    //             />
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //   </InfiniteScroll>
    // </>
  );
};
// };

export default GridProductList;
