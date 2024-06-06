export default function Product(props) {
  const MAX_TITLE_LENGTH = 17; // El número máximo de caracteres permitidos en el título
  const MAX_DESCRIPTION_LENGTH = 40; // El número máximo de caracteres permitidos en la descripción\

  return (
    <div
      className=" card  text-start    "
      style={{ borderRadius: "10px", minHeight: "13rem" }}
    >
      {props.offer && (
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            position: "absolute",
          }}
        >
          <span
            className=""
            style={{ fontSize: "15px" }}
          >{`${props.discountPercentage}%`}</span>
        </div>
      )}
      <div
        className=" d-flex justify-content-center align-items-center  "
        style={{ width: "100%" }}
      >
        {props.url ? (
          <img
            className="mx-auto"
            src={props.url}
            alt="product "
            style={{
              width: "100%",
              // height: "150px",
              objectFit: "scale-down",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
          />
        ) : (
          <img
            src={
              "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
            }
            width={"100%"}
            // height={180}
            alt="Product"
            className="rounded-md"
          />
        )}
      </div>

      <div className="p-2" style={{ backgroundColor: "" }}>
        <h5
          className="name"
          style={{ fontWeight: "bold", color: "", fontSize: "0.85rem" }}
        >
          {props.name}
        </h5>
        {/* <div
          className=""
          // style={
          //   window.innerWidth > 767 ? { height: "50px" } : { height: "40px" }
          // }
        >
          {props.description ? (
            <p className="description">
              {props.description.length > MAX_DESCRIPTION_LENGTH
                ? props.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
                : props.description}
            </p>
          ) : (
            <p className="description"> Sin Descripcion</p>
          )}
        </div> */}

        {props.offer ? (
          <div className="price d-flex gap-4 " style={{}}>
            <p style={{ color: "", fontWeight: "bold" }}>
              {props.price - props.price * (props.discountPercentage / 100)} USD{" "}
            </p>
            <p
              style={{
                textDecoration: "line-through",
                fontSize: "16px",
                color: "gray",
              }}
            >
              {" "}
              {props.price} USD
            </p>
          </div>
        ) : (
          <p
            className=""
            style={{ color: "", fontWeight: "bold", fontSize: "1.3rem" }}
          >
            {props.price} $
          </p>
        )}
      </div>
    </div>
  );
}
