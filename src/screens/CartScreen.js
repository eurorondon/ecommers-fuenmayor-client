import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProudct } from "../api/productsApi";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateClient } from "aws-amplify/api";
import { getProduct } from "../graphql/queries";

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const qty = Number(searchParams.get("qty")) || 1;
  const [dataQty, setDataQty] = useState({});

  // const qty = searchParams.get("qty") || 1;
  const client = generateClient();
  // window.scrollTo(0, 0);

  const parametros = useParams();
  const productos = cartItems
    .map(
      (item) =>
        ` \n ✅ *${item.name}*   \n *Cantidad*: ${item.qty} \n *Precio*:${item.price}$ \n`
    )
    .join("");

  const name = "euro";
  const telefono = "+584126773234";
  const mensaje = `👋 Hola, mi nombre es ${name}.\n Deseo comprar estos artículos: 💭 \n ${productos} \n Para pagar un total de 🔜 *${total}$* \n `;

  const checkOutHandler = () => {
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank"); // Abre la URL en una nueva pestaña o ventana del navegador

    dispatch(clearCart());
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

    // {
    //   onSuccess: (data) => {},
    // }
  );
  // if (data) {
  //   data.qty = qty;
  //   console.log(data);
  // }

  // useEffect(() => {
  //   if (data) {
  //     const updatedProduct = { ...data.data.getProduct }; // Clonar el objeto
  //     updatedProduct.qty = qty; // Modificar la propiedad qty en la copia
  //     dispatch(addToCart(updatedProduct));
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (success) {
  //     history.push(`/order/${order._id}`);
  //     dispatch({ type: ORDER_CREATE_RESET });

  //     const productos = cart.cartItems
  //       .map(
  //         (item) =>
  //           ` \n ✅ *${item.name}*   \n *Cantidad*: ${item.qty} \n *Precio*:${item.price}$ \n`
  //       )
  //       .join("");
  //     const link = `${URL}/order/${order._id}`;
  //     const name = userInfo.name;
  //     const mensaje = `👋 Hola, mi nombre es ${name}.\n Deseo comprar estos artículos: 💭 \n ${productos} \n Para pagar un total de 🔜 *${cart.totalPrice}$* \n `;

  //     // para enviar  orden a whatsapp

  //     const telefono = "+584126022881";
  //     const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
  //       mensaje
  //     )}`;

  //     // window.open(url, "_blank");
  //     // window.open(url);
  //     window.open(url, "_self");
  //   }
  // }, [history, dispatch, success, order]);

  useEffect(() => {
    if (data) {
      dispatch(
        addToCart({
          product: data.data.getProduct?.id,
          name: data.data.getProduct.name,

          price: data.data.getProduct.price,
          countInStock: data.data.getProduct.countInStock,
          qty,
          photo: data?.data?.getProduct?.photo[0].url,
        })
      );
    }
  }, [data]);
  const removeFromCartHandle = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Header />
      {/* Cart */}(
      <div className="container">
        {cartItems.length === 0 ? (
          <div
            className="d-flex align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <div className=" alert alert-info text-center mt-3">
              Your cart is empty
              <Link
                className="btn btn-success mx-5 px-5 py-3"
                to="/"
                style={{
                  fontSize: "12px",
                }}
              >
                SHOPPING NOW
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className=" alert alert-info text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cartiterm */}
            {cartItems.map((item, index) => (
              <div className="cart-iterm row " key={index}>
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  className="  remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.photo} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>CANTIDAD</h6>
                  <select
                    value={item?.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart({
                          product: item.product,
                          qty: Number(e.target.value),
                        })
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>PRECIO</h6>
                  <h4>${item.price}</h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">${total}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6 ">
                <button>Agregar mas Productos</button>
              </Link>

              <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                <button onClick={checkOutHandler}>Concretar Compra</button>
              </div>
            </div>
          </div>
        )}
      </div>
      )
    </>
  );
};

export default CartScreen;
