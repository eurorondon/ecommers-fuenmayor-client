import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import MyButton from "../components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { newOrder } from "../utils/graphqlFunctions";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
// import { PayPalButton } from "react-paypal-button-v2";

const OrderScreen = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  const { email, fullName, id, phoneNumber } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  console.log(user);

  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  // Calcula el total de los subtotales
  const totalSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  function mapOrderItems(orderItems) {
    return orderItems.map((item) => ({
      name: item.name,
      qty: item.qty,
      image: item.photo,
      price: item.price,
      id: item.product,
    }));
  }

  const res = mapOrderItems(cartItems);
  console.log(res);

  const orderData = {
    user,
    orderItems: mapOrderItems(cartItems), // Mapea los elementos del carrito al formato requerido por el pedido GraphQL
    isPaid: false,
    totalPrice: totalSubtotal,
  };
  console.log(orderData);

  const productos = cartItems
    .map(
      (item) =>
        ` \n ✅ *${item.name}*   \n *Cantidad*: ${item.qty} \n *Precio*:${item.price}$ \n`
    )
    .join("");

  const name = user.fullName;
  const telefono = "+584126773234";
  const mensaje = `👋 Hola, mi nombre es *${name}* \n Deseo comprar estos artículos: 💭 \n ${productos} \n Para pagar un total de 🔜 *${totalSubtotal}$* \n `;

  // const HandlerSendWhatsapp = () => {
  //   const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
  //     mensaje
  //   )}`;
  //   window.open(url, "_blank"); // Abre la URL en una nueva pestaña o ventana del navegador

  //   // dispatch(clearCart());
  // };

  // // separate

  // HandlerSendWhatsapp();

  const handleCreateOrder = async () => {
    if (!cartItems.length > 0) {
      toast.error("No hay Items en el carrito");
      return;
    }
    alert(
      "📋Te enviaremos a Whatsapp, Recuerda tu orden se ha guardado en tu perfil 🚀 "
    );
    try {
      const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(url, "_blank");
      await newOrder(orderData);

      toast.success("Orden de compra creada con exito");

      dispatch(clearCart());

      navigate("/");
    } catch (error) {
      console.log(error);
      return;
    } // Abre la URL en una nueva pestaña o ventana del navegador
  };

  // const handleCreateOrder = async () => {
  //   if (!cartItems.length > 0) {
  //     toast.error("No hay Items en el carrito");
  //     return;
  //   }
  //
  // };

  return (
    <>
      <Header />
      <div className="">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4  mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <span>
                  {"Cliente:"} {email}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8 ">
            <div>
              {cartItems?.length > 0 ? (
                cartItems.map((items) => (
                  <div className="order-product row" key={items.id}>
                    <div className="col-md-3 col-4 rounded " style={{}}>
                      <img
                        className=" "
                        src={items.photo}
                        alt="product"
                        style={{ borderRadius: "10%" }}
                      />
                    </div>
                    <div className="col-md-5 col-4 d-flex align-items-center">
                      <Link to={`/`}>
                        <h6>{items.name}</h6>
                        <h6> {items.price} $</h6>
                      </Link>
                    </div>
                    <div className="mt-3 mt-md-0 col-4 col-md-2 d-flex align-items-center flex-column justify-content-center">
                      <h4>Cantidad</h4>
                      <h6>{items.qty}</h6>
                    </div>
                    <div className=" mt-md-0 col-md-2 d-flex align-items-center justify-content-end  gap-1">
                      <h6 style={{ fontWeight: "bold" }}>Sub Total: </h6>
                      <h6> {items.price * items.qty} $</h6>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay artículos en esta orden.</p>
              )}
            </div>
          </div>

          <div className="col-lg-3 d-flex align-items-end flex-column  subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>{totalSubtotal} $</td>
                </tr>
                <tr>
                  <td>
                    <strong>Envio</strong>
                  </td>
                  <td>0 $</td>
                </tr>
                <tr>
                  <td>
                    <strong>IVA</strong>
                  </td>
                  <td>0 $</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>{totalSubtotal} $</td>
                </tr>
              </tbody>
            </table>

            <MyButton
              title={"Realizar orden de compra"}
              onPress={handleCreateOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
