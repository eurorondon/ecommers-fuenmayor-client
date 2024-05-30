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
  const [date, setDate] = React.useState("");

  const user = useSelector((state) => state.user);

  const { data, isLoading } = useQuery(["singleOrder", id], () =>
    singleOrder(id)
  );

  function formatDateToSpanish(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("es-ES", options).format(
      date
    );
    return formattedDate;
  }

  React.useEffect(() => {
    setOrderItems(data?.orderItems || []);
    setTotalSubtotal(data?.totalPrice || 0);
    setIsPaid(data?.isPaid || false);
    if (data?.createdAt) {
      const dateFormated = formatDateToSpanish(data.createdAt);
      setDate(dateFormated);
    }
  }, [data]);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="">
          <div className="row order-detail">
            <div className="col-lg-4 col-sm-4 mb-lg-4  mb-sm-0">
              <div className="row">
                <div className="col-md-4 center">
                  <span> {date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row order-products justify-content-between">
            <div className="col-lg-8 ">
              <div>
                {orderItems?.length > 0 ? (
                  orderItems.map((items) => (
                    <div className="order-product row" key={items.id}>
                      <div className="col-md-3 col-4 rounded " style={{}}>
                        <img
                          className=" "
                          src={items.image}
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
