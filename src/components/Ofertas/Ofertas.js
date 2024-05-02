import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonBase } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import Product from "../Ofertas/ProductOfertas";

import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getProductsInOfert } from "../../utils/graphqlFunctions";
// import Loading from "../../Loading";
// import Message from "../../LoadingError/Error";

const Ofertas = () => {
  const { data, isLoading, isError } = useQuery(
    ["ProductsInOffer"],
    getProductsInOfert,
    {
      onSuccess: () => {
        console.log(data);
        // setCategories(dataCategories);
      },
    }
  );
  const productList = data;
  const sliderRef = useRef(null);

  if (isLoading) return null;
  if (isError) return null;

  const renderArrows = () => {
    return (
      <div className="slider-arrow">
        <ButtonBase
          className="arrow-btn prev bg-black text-white rounded-circle"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowLeft />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn next bg-black text-white rounded-circle"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowRight />
        </ButtonBase>
      </div>
    );
  };

  const settings = {
    dots: true,
    arrows: false,
    // infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const products = productList
    ? productList.map((item) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <Product
            url={item?.photo[0]?.url}
            name={item.name}
            description={item.description}
            price={item.price}
            offer={item.inOffer}
            discountPercentage={item.discountPercentage}
          />
        </Link>
      ))
    : null;

  const FeaturedProducts = () => (
    <div className="container  my-4 ">
      <h2 className="container  my-2">Ofertas</h2>
      <div
        className=""
        style={{ position: "relative", width: "100%", margin: "auto" }}
      >
        <Slider {...settings} ref={sliderRef}>
          {products}
        </Slider>
        {renderArrows()}
      </div>
    </div>
  );

  console.log(productList.length);

  return (
    <>
      {(window.innerWidth > 1024 && productList.length >= 5) ||
      (window.innerWidth > 800 &&
        window.innerWidth <= 1024 &&
        productList.length >= 4) ||
      (window.innerWidth <= 800 && productList.length >= 3) ? (
        <FeaturedProducts />
      ) : null}

      <style>{`
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          width: 100%;
          left: 0;
          right: 0;
          background-color: black;
        }
        .arrow-btn {
          font-size: 2rem;
          position: absolute;
        }
        .prev {
          left: -50px;
        }
        .next {
          right: -50px;
        }
        .slick-dots li {
          margin: 0;
          width: 15px;
          height: 15px;
        }
        .slick-active {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Ofertas;
