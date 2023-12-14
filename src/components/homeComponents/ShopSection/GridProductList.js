import React from "react";
import Product from "./ProductGrid";
import { Link } from "react-router-dom";
import { isError, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api/productsApi";
import Loading from "../../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listProductListFuenmayors } from "../../../graphql/queries";
import amplifyconfig from "../../../amplifyconfiguration.json";

Amplify.configure(amplifyconfig);
const client = generateClient();

const GridProductList = () => {
  const [products, setProducts] = React.useState([]);

  // React.useEffect(() => {
  //   fetchProducts();
  // }, []);

  const { data, isLoading, isError } = useQuery(
    ["listProductListFuenmayors"],
    async () => {
      try {
        const productsData = await client.graphql({
          query: listProductListFuenmayors,
          variables: {
            limit: 20,
            filter: { nombre: { contains: "" } },
          },
        });

        return productsData.data.listProductListFuenmayors.items;
      } catch (err) {
        console.error("Error fetching todos", err);
        throw err;
      }
    },
    {
      onSuccess: (data) => {
        setProducts(data);
      },
    }
  );

  console.log(data, isError);

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

  // if (isLoading) return <Loading />;
  // else {
  return (
    <div className=" grid mx-auto ">
      {products?.map((product) => (
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>
            <Product
              // url={product.photo[0].url}
              name={product.nombre}
              description={product.departamento}
              price={product.price}
            />
          </Link>
        </div>
      ))}
    </div>
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
