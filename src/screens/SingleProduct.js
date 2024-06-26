import React, { useEffect, useRef, useState } from "react";
import Header from "./../components/Header";
import { useParams, useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { getProduct } from "../graphql/queries";
import amplifyconfig from "../amplifyconfiguration.json";
import Slider from "react-slick";
import { ButtonBase } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 464,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SingleProduct = ({ match }) => {
  const { id } = useParams();
  const sliderRef = useRef(null);

  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [product, setProduct] = React.useState({});

  Amplify.configure(amplifyconfig);
  const client = generateClient();

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

  const { data, isLoading, isFetching, isError, refetch } = useQuery(
    [`Product ${id}`],
    async () => {
      try {
        const productsData = await client.graphql({
          query: getProduct,
          variables: {
            id,
          },
        });

        return productsData;
      } catch (err) {
        console.error("Error fetching todos", err.errors);
        throw err;
      }
    }
  );
  useEffect(() => {
    setProduct(data?.data?.getProduct);
  }, [data]);

  const handleQtyChange = (event) => {
    const newQty = parseInt(event.target.value, 10); // Obtener el nuevo valor seleccionado como un entero
    setQty(newQty); // Actualizar el estado qty
  };

  // enviamos los datos extraídos de la API a REDUX
  // useEffect(() => {
  //   if (data) {
  //     dispatch(setProductDetails(data));
  //   }
  // }, [data, dispatch]);

  //usamos los datos del estado de redux
  // const { setProductDetails } = useSelector((state) => state.products);

  const AddToCartHandle = (e) => {
    e.preventDefault();

    navigate(`/cart/${id}?qty=${qty}`);
  };

  if (isLoading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <Loading />
        </div>
      </div>
    );

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Header />
      </div>
      {/* <button onClick={handleGoBack}>Volver</button> */}
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6  ">
            <div
              className=""
              style={{
                width: window.innerWidth >= 1024 ? "24vw" : "100%",
                position: "relative",
                borderRadius: "3%",
                padding: "10px",
                backgroundColor: "rgba(199, 255, 51, 0.2)",
                boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Slider {...settings} ref={sliderRef}>
                {product?.photo?.map((image) => (
                  <div className="">
                    <img
                      src={image.url}
                      alt={product?.name}
                      style={{
                        width: "100%",

                        // height: "60vh",
                        borderRadius: "2%",
                      }}
                    />
                  </div>
                ))}
              </Slider>
              {window.innerWidth >= 1024 &&
                product?.photo?.length > 1 &&
                renderArrows()}
              {/* <img
                src={product?.photo?.[0]?.url}
                alt={product?.name}
                style={{ width: "100%", borderRadius: "4%" }}
              /> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name mt-5">{product?.name}</div>
              </div>
              <p>{product?.description}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Precio</h6>
                  <span>${product?.price}</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Estado</h6>
                  {product?.countInStock > 0 ? (
                    <span>Disponible</span>
                  ) : (
                    <span>No Disponible</span>
                  )}
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Reviews</h6>
                </div>
                {product?.countInStock > 0 ? (
                  <>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Quantity</h6>
                      <select value={qty} onChange={handleQtyChange}>
                        {[...Array(product?.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={AddToCartHandle}
                      className="round-black-btn"
                    >
                      Añadir al Carrito
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* RATING */}
        {/* <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3">REVIEWS</h6>

            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Admin Doe</strong>

              <span>Jan 12 2021</span>
              <div className="alert alert-info mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>WRITE A CUSTOMER REVIEW</h6>
            <div className="my-4"></div>

            <form>
              <div className="my-4">
                <strong>Rating</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="my-4">
                <strong>Comment</strong>
                <textarea
                  row="3"
                  className="col-12 bg-light p-3 mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  SUBMIT
                </button>
              </div>
            </form>
            <div className="my-3">
              <Message variant={"alert-warning"}>
                Please{" "}
                <Link to="/login">
                  " <strong>Login</strong> "
                </Link>{" "}
                to write a review{" "}
              </Message>
            </div>
          </div>
        </div> */}
      </div>
      <style>{`
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%); 
          // z-index: 20;
          width: 100%;
          left: 1;
          right: 1;
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

export default SingleProduct;
