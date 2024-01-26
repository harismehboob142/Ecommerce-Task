"useclient";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "@/public/store/Cartslice";
import Navbar from "@/Components/Navbar";
const Cart = () => {
  const items = useSelector((state) => state.cart);
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increment = (productid) => {
    dispatch(updateQuantity({ productid, quantity: 1 }));
  };

  const decrement = (productid, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productid, quantity: -1 }));
    }
  };

  const calculateTotal = () => {
    const total = products.reduce(
      (val, product) => val + product.price * product.quantity,
      0
    );
    return total.toFixed(0);
  };
  return (
    <>
      <Navbar />
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "1.6rem",
          paddingLeft: "3rem",
        }}
      >
        Your Cart
      </h1>
      <div className="cartcontainer">
        <div className="carttable">
          <section className="cartsection">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr style={{ backgroundColor: "#f2f2f2", marginTop: "4rem" }}>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      <p
                        style={{
                          fontSize: "2.4rem",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Cart is empty
                      </p>
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr
                      key={product.id}
                      style={{
                        backgroundColor: "white",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <td style={{ display: "flex" }}>
                        <img
                          className="img block relative hover:scale-110 transition-transform duration-300 ease-out"
                          src={product.image}
                          alt="productimage"
                          style={{
                            width: "5rem",
                            height: "5rem",
                            marginTop: "1rem",
                          }}
                        />
                      </td>
                      <td>
                        <h1
                          className="heading"
                          style={{
                            fontSize: "1rem",
                            padding: "1rem 0rem 0rem 1rem",
                            fontWeight: "300",
                            textTransform: "capitalize",
                            paddingTop: "-1rem",
                          }}
                        >
                          {product.title}
                        </h1>
                      </td>
                      <td>
                        <div className="incdecbtn">
                          <button
                            onClick={() =>
                              decrement(product.id, product.quantity)
                            }
                          >
                            -
                          </button>
                          <span>{product.quantity}</span>
                          <button onClick={() => increment(product.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>$ {(product.price * product.quantity).toFixed(0)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </section>
        </div>
        <div className="checkout">
          <h1 style={{ paddingTop: "1rem" }}>Your Total</h1>
          <br />
          <p>
            Total Products = {items.length}
            <span style={{ paddingLeft: "6rem" }}>${calculateTotal()}</span>
          </p>
          <h1 style={{ paddingTop: "12rem", paddingLeft: "0.5rem" }}>
            Total
            <span style={{ paddingLeft: "12.5rem" }}>${calculateTotal()}</span>
          </h1>
          <button
            onClick={() => {
              alert("Payment Successfull!!!");
            }}
            className="checkoutbtn"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
