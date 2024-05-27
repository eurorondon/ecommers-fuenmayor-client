import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { getCategories } from "../../../utils/graphqlFunctions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonBase } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SliderCategory() {
  const [categories, setCategories] = React.useState([]);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const handleCategories = (category) => {
    window.scroll(0, 0);
    navigate(`/categories/${category.categoryName}`);
    // alert("categories scroll 0,0");
  };

  const { data: dataCategories, error } = useQuery(
    ["AllCategories"],
    getCategories,
    {
      onSuccess: (data) => {
        setCategories(data);
      },
    }
  );

  React.useEffect(() => {
    if (dataCategories) {
      setCategories(dataCategories);
    }
  }, [dataCategories]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const renderArrows = () => {
    return (
      <>
        <ButtonBase
          className="arrow-btn prev"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowLeft sx={{ fontSize: 100 }} />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn next"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowRight />
        </ButtonBase>
      </>
    );
  };

  return (
    <>
      <div>
        <div className="">
          {/* <h4 className="container my-2">Categorias</h4> */}
          <div
            className=" pt-3 "
            style={{
              position: "relative",
              backgroundColor: "#040915",
              color: "white",
            }}
          >
            <ButtonBase
              sx={{
                background: "gray",
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "20",
                opacity: 0.5,
                height: "100%",
              }}
              className=""
              onClick={() => sliderRef.current.slickPrev()}
            >
              <ArrowLeft sx={{ color: "#ffff" }} />
            </ButtonBase>

            <div className="col-12" style={{}}>
              <Slider {...settings} ref={sliderRef}>
                {categories.map((category, index) => (
                  <div
                    className=""
                    key={index}
                    style={{ margin: "5px", textAlign: "center" }}
                  >
                    <div
                      className=" mx-auto"
                      // to={`/categories/${category.categoryName}`}
                      onClick={() => handleCategories(category)}
                      style={{
                        width: "20vw",
                        height: "20vw",
                        borderRadius: "50%",
                        backgroundColor: "#CCCCCC",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={
                          category.photo
                            ? category.photo[0].url
                            : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
                        }
                        alt={category.categoryName}
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                    <div
                      className="bg-danger mt-1"
                      style={{ fontSize: "0.8rem", textAlign: "center" }}
                    >
                      <span>{category.categoryName}</span>
                    </div>
                    {/* <div className="" style={{ textAlign: "center" }}>
                      {category.name}
                    </div> */}
                  </div>
                ))}
              </Slider>
            </div>

            <ButtonBase
              // className="col-1"
              sx={{
                background: "gray",
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "20",
                opacity: 0.5,
                height: "100%",
              }}
              onClick={() => sliderRef.current.slickNext()}
            >
              <ArrowRight />
            </ButtonBase>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCategory;
