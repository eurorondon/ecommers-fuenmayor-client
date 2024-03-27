export default function Product(props) {
  const MAX_TITLE_LENGTH = 17; // El número máximo de caracteres permitidos en el título
  const MAX_DESCRIPTION_LENGTH = 40; // El número máximo de caracteres permitidos en la descripción

  return (
    <div
      className="card text-start"
      style={{ border: "none", borderRadius: "0" }}
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
      <div className="mx-auto" style={{ maxWidth: "14rem" }}>
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
      </div>

      <div className="p-2" style={{ backgroundColor: "" }}>
        <h5 className="name" style={{ fontWeight: "bold", color: "#00789D" }}>
          {props.name}
        </h5>
        <div>
          {props.description ? (
            <p className="description">
              {props.description.length > MAX_DESCRIPTION_LENGTH
                ? props.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
                : props.description}
            </p>
          ) : (
            <p className="description">Sin Descripcion</p>
          )}
        </div>

        <div
          className="price      "
          style={{ display: "flex", alignItems: "center" }}
        >
          <p
            style={{
              color: "#3b83bd",
              fontWeight: "bold",
              // fontSize: "14px",
              marginRight: "20px",
            }}
          >
            {props.price - props.price * (props.discountPercentage / 100)}${" "}
          </p>
          <p
            style={{
              textDecoration: "line-through",
              fontSize: "16px",
              color: "gray",
            }}
          >
            {" "}
            {props.price}$
          </p>
        </div>
      </div>
    </div>
  );
}
