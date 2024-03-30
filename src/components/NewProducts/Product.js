export default function Product(props) {
  const MAX_TITLE_LENGTH = 17; // El número máximo de caracteres permitidos en el título
  const MAX_DESCRIPTION_LENGTH = 40; // El número máximo de caracteres permitidos en la descripción\

  return (
    <div className=" card  text-start mx-1 " style={{ borderRadius: "10px" }}>
      {/* <div className="mx-auto" style={{ maxWidth: "14rem" }}>
        <img
          className="mx-auto"
          src={props.url}
          alt="product image"
          style={{
            width: "95%",
            height: "150px",
            objectFit: "scale-down",
          }}
        />
      </div> */}
      <div
        className=" d-flex justify-content-center align-items-center  "
        style={{ width: "100%", padding: "5px" }}
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
        <h5 className="name" style={{ fontWeight: "bold", color: "#00789D" }}>
          {props.name}
        </h5>
        <div
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
        </div>

        <p className="price" style={{ color: "#3b83bd", fontWeight: "bold" }}>
          {props.price} $
        </p>
      </div>
    </div>
  );
}
