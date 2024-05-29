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

  const handleCreateOrder = async () => {
    if (!cartItems.length > 0) {
      toast.error("No hay Items en el carrito");
      return;
    }
    try {
      await newOrder(orderData);
      dispatch(clearCart());
      toast.success("Orden de compra creada con exito");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Cliente</strong>
                </h5>
                <p>{fullName}</p>
                <p>
                  <a href={`mailto:admin@example.com`}>{email}</a>
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          {/* <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: Tanzania</p>
                <p>Pay method: Paypal</p>

                <div className="bg-info p-2 col-12">
                  <p className="text-white text-center text-sm-start">
                    Paid on Jan 12 2021
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* 3 */}
          {/* <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>
                  Address: Arusha Tz, Ngaramtoni Crater, P.O BOX 1234 Arusha Tz
                </p>
                <div className="bg-danger p-1 col-12">
                  <p className="text-white text-center text-sm-start">
                    Not Delivered
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row order-products justify-content-between ">
          <div className="col-lg-8">
            {!cartItems.length > 0 ? (
              <h2 className="text-center my-2">Tu carrito esta Vacio</h2>
            ) : (
              <div>
                {cartItems.map((items) => (
                  <div className="order-product row ">
                    <div className="col-md-3 col-6">
                      <img src={items.photo} alt="product" />
                    </div>
                    <div className="col-md-5 col-6 d-flex align-items-center">
                      <Link to={`/`}>
                        <h6>{items.name}</h6>
                        <h6>Precio: {items.price} $</h6>
                      </Link>
                    </div>
                    <div className="mt-3 mt-md-0 col-6 col-md-2  d-flex align-items-center flex-column justify-content-center ">
                      <h4>QUANTITY</h4>
                      <h6>{items.qty}</h6>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center">
                      <h4 style={{ fontWeight: "bold" }}>SUBTOTAL</h4>
                      <h6>{items.price * items.qty} $</h6>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* <Message variant="alert-info mt-5">Your order is empty</Message> */}
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
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
            {/* <div className="col-12">
              <PayPalButton amount={345} />
            </div> */}

            <div className="col-12 my-5">
              <MyButton
                title={"Realizar orden de compra"}
                onPress={handleCreateOrder}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
