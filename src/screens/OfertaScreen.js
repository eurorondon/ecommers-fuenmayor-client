import React from "react";
import Header from "../components/Header";
import Ofertas from "../components/Ofertas/Ofertas";
import { listProducts } from "../graphql/queries";
import { getProductsInOfert } from "../utils/graphqlFunctions";
import { useInfiniteQuery } from "@tanstack/react-query";
import Product from "../components/homeComponents/ShopSection/ProductGrid";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

function OfertaScreen() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    window.scroll(0, 0);
    navigate(`/products/${id}`);
  };
  const { data, isLoading, hasNextPage, fetchNextPage, refetch, isFetching } =
    useInfiniteQuery(["infinity-products-ofertas"], getProductsInOfert, {
      // refetchOnMount: false,
      // refetchInterval: false,
      // refetchOnWindowFocus: false,
      // refetchIntervalInBackground: false,
      // onSuccess: (data) => {},
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
  console.log("productos en oferta", products);

  // console.log("this is offer", data?.pages);
  return (
    <div>
      <Header />
      <div className="m-3">
        <h4 className="mb-3">Ofertas</h4>
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
    </div>
  );
}

export default OfertaScreen;
