import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./../components/Header";
import MyButton from "../components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { singleOrder } from "../utils/graphqlFunctions";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";

const MyOrderScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  window.scrollTo(0, 0);
  const { email, fullName, phoneNumber } = useSelector((state) => state.user);
  const [orderItems, setOrderItems] = React.useState([]);
  const [totalSubtotal, setTotalSubtotal] = React.useState(0);
  const [isPaid, setIsPaid] = React.useState(false);

  const user = useSelector((state) => state.user);

  const { data, isLoading } = useQuery(
    ["singleOrder", id],
    () => singleOrder(id),
    {
      // onSuccess: (data) => {
      //   setOrderItems(data?.orderItems || []);
      //   setTotalSubtotal(data?.totalPrice || 0);
      //   setIsPaid(data?.isPaid || false);
      // },
    }
  );

  React.useEffect(() => {
    setOrderItems(data?.orderItems || []);
    setTotalSubtotal(data?.totalPrice || 0);
    setIsPaid(data?.isPaid || false);
  }, [data]);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row order-detail">
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
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row order-products justify-content-between">
            <div className="col-lg-8">
              <div>
                {orderItems?.length > 0 ? (
                  orderItems.map((items) => (
                    <div className="order-product row" key={items.id}>
                      <div className="col-md-3 col-6">
                        <img src={items.image} alt="product" />
                      </div>
                      <div className="col-md-5 col-6 d-flex align-items-center">
                        <Link to={`/`}>
                          <h6>{items.name}</h6>
                          <h6>Precio: {items.price} $</h6>
                        </Link>
                      </div>
                      <div className="mt-3 mt-md-0 col-6 col-md-2 d-flex align-items-center flex-column justify-content-center">
                        <h4>QUANTITY</h4>
                        <h6>{items.qty}</h6>
                      </div>
                      <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-column justify-content-center">
                        <h4 style={{ fontWeight: "bold" }}>SUBTOTAL</h4>
                        <h6>{items.price * items.qty} $</h6>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No hay artículos en esta orden.</p>
                )}
              </div>
            </div>
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

              {!isPaid && <h2>Orden por pagar</h2>}

              <div className="col-12 my-3">
                <MyButton title={"Pagar con Transferencia"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrderScreen;
