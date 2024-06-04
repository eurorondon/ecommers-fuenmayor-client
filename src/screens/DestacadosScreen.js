import React from "react";
import Header from "../components/Header";
import { getProducts } from "../api/productsApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductsBestSellers } from "../utils/graphqlFunctions";
import InfiniteScroll from "react-infinite-scroll-component";
import Product from "../components/homeComponents/ShopSection/ProductGrid";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function DestacadosScreen() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    window.scroll(0, 0);
    navigate(`/products/${id}`);
  };
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
    isFetching,
    isError,
  } = useInfiniteQuery(["destacados"], getProductsBestSellers, {
    // refetchOnMount: false,
    // refetchInterval: false,
    // refetchOnWindowFocus: false,
    // refetchIntervalInBackground: false,

    getNextPageParam: (lastPage) => {
      return lastPage.nextToken || null;
    },
  });

  // const products =
  //   data?.pages?.reduce(
  //     (prevProducts, page) => prevProducts.concat(page.items),
  //     []
  //   ) ?? [];

  const products = data?.pages.flat();

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
        <div className="m-3">
          <h4 className="mb-3">Destacados</h4>
          <div className="mb-5">
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
                        url={product?.photo[0]?.url}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default DestacadosScreen;
