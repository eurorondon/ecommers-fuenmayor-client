import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonBase } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import Product from "../NewProducts/Product";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ListProductsByDate, getProducts } from "../../utils/graphqlFunctions";

const NewProducts = () => {
  const { data, isLoading, isError } = useQuery(
    ["NewProducts"],
    ListProductsByDate,
    {
      onSuccess: () => {},
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
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const products = productList
    ? productList?.slice(0, window.innerWidth > 767 ? 30 : 12).map((item) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <Product
            url={item?.photo[0]?.url}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        </Link>
      ))
    : null;

  const FeaturedProducts = () => (
    <div style={{ overflow: "hidden" }}>
      <div className="container mx-auto my-4">
        <h4 className=" my-2">Lo mas Nuevo</h4>
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
    </div>
  );

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

export default NewProducts;
