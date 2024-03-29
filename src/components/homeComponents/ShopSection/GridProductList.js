import React from "react";
import Product from "./ProductGrid";
import { Link, useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listProducts } from "../../../graphql/queries";
import amplifyconfig from "../../../amplifyconfiguration.json";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../../features/categories/categorySlice";
import { useParams } from "react-router-dom";

Amplify.configure(amplifyconfig);
const client = generateClient();

const GridProductList = () => {
  // const [products, setProducts] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);

  const navigate = useNavigate();

  const { category, search } = useParams();

  const { data, isLoading, hasNextPage, fetchNextPage, refetch, isFetching } =
    useInfiniteQuery(
      [category ? `infinity-products-${category}` : "infinity-products"],
      async ({ pageParam }) => {
        try {
          // const filter = {
          //   ...(category ? { categories: { contains: category } } : {}),
          //   // ...(search !== "" ? { name: { contains: search } } : {}),
          // };

          let filter;
          if (category) {
            filter = { categories: { contains: category } };
          }

          if (search) {
            filter = { name: { contains: search } };
          }

          const productsData = await client.graphql({
            query: listProducts,
            variables: {
              limit: 6,
              filter,
              nextToken: pageParam,
            },
          });

          return productsData.data.listProducts;
        } catch (err) {
          console.error("Error fetching todos", err.errors);
          throw err;
        }
      },
      {
        // refetchOnMount: false,
        // refetchInterval: false,
        // refetchOnWindowFocus: false,
        // refetchIntervalInBackground: false,
        // onSuccess: (data) => {},
        getNextPageParam: (lastPage) => {
          return lastPage.nextToken || null;
        },
      }
    );

  const products =
    data?.pages.reduce(
      (prevProducts, page) => prevProducts.concat(page.items),
      []
    ) ?? [];

  const handleNavigate = (id) => {
    window.scroll(0, 0);
    navigate(`/products/${id}`);
  };

  React.useEffect(() => {
    refetch();
  }, [category, refetch, search]);

  if (isLoading)
    return (
      <div style={{ minHeight: "50vh" }}>
        <h1>Cargando...</h1>
        <Loading />
      </div>
    );
  // if (products.length < 1)
  //   return (
  //     <div style={{ minHeight: "50vh" }}>
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //         }}
  //       >
  //         <h1>Sin Resultados </h1>
  //         <Link to={"/"} style={{ marginLeft: "10px" }}>
  //           X
  //         </Link>
  //       </div>
  //     </div>
  //   );
  console.log(products);
  return (
    <>
      {category ? (
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <h3 className="" style={{ margin: "20px" }}>
            Filtrando por categoria : {category}
          </h3>
          <Link to={"/"}>X</Link>
        </div>
      ) : search ? (
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <h3 className="" style={{ margin: "20px" }}>
            Resultado de Busqueda : {search}
          </h3>
          <Link to={"/"}>X</Link>
        </div>
      ) : (
        <h2>Todos los Articulos</h2>
      )}

      <InfiniteScroll
        dataLength={products ? products.length : 0}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        // loader={
        //   <div className="mx-auto">
        //     <Loading />
        //   </div>
        // }
      >
        <div className=" grid mx-auto ">
          {products?.map((product) => (
            <div key={product.id}>
              <div
                style={{ cursor: "pointer" }}
                className=""
                onClick={() => handleNavigate(product.id)}
                //  to={`/products/${product.id}`}
              >
                <Product
                  url={product.photo[0].url}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  offer={product.inOffer}
                  discountPercentage={product.discountPercentage}
                />
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default GridProductList;
