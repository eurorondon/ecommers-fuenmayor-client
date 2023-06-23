import Product from "./ProductGrid";
import { Link } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api/productsApi";
import Loading from "../../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const GridProductList = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      ["infinity-products"],
      ({ pageParam = 0 }) =>
        getProducts(`/api/products?pageNumber=${pageParam}`),

      {
        getNextPageParam: (lastPage) => {
          if (lastPage.page === lastPage.pages) return false;
          return lastPage.page + 1;
        },
      }
    );

  // const productList =
  //   data?.pages.reduce(
  //     (prevProducts, page) => prevProducts.concat(page.products),
  //     []
  //   ) ?? [];

  const productList = data?.pages.flatMap((page) => page.products) ?? [];

  if (isLoading) return <Loading />;
  else {
    return (
      <>
        <h2>Todos los Articulos</h2>
        <InfiniteScroll
          dataLength={productList.length}
          hasMore={hasNextPage}
          next={() => fetchNextPage()}
          loader={
            <div className="mx-auto">
              <Loading />
            </div>
          }
        >
          <div className=" grid mx-auto ">
            {productList?.map((product) => (
              <div key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <Product
                    url={product.photo[0].url}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                  />
                </Link>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </>
    );
  }
};

export default GridProductList;
