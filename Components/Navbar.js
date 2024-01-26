import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div className="containerheader">
        <div className="cheaderchild1">
          <h1>Ecommerce</h1>
        </div>
        <div className="cheaderchild2">
          <div className="mobmenu">
            <ul>
              <Link href="/Electronics">
                <li>
                  <span className="list1">Electronics</span>
                </li>
              </Link>
              <hr />
              <Link href="/mens">
                <li>
                  <span className="list2">Men's Fashion</span>
                </li>
              </Link>
              <hr />
              <Link href="/Women">
                <li>
                  <span className="list3">Women's Fashion</span>
                </li>
              </Link>
              <hr />
              <Link href="/Jewelery">
                <li>
                  <span className="list4">Jewelery</span>
                </li>
              </Link>
              <hr />
            </ul>
          </div>
        </div>
        <div className="cheaderchild3">
          <input
            style={{
              width: "18rem",
              height: "3rem",
              borderRadius: "0.8rem",
              border: "0.1rem solid gray",
              position: "relative",
              marginTop: "1.2rem",
              marginLeft: "4rem",
            }}
            type="search"
            placeholder="Search"
          />
          <span
            style={{
              position: "absolute",
              marginLeft: "-2rem",
              marginTop: "2rem",
            }}
          >
            <span className="fa-solid fa-magnifying-glass fa-xl"></span>
          </span>
          <Link href="/Cart">
            <button style={{ fontSize: "1.2rem" }} className="cartbtn">
              <span style={{ color: "white" }}>{items.length}</span>
              <span> </span>
              <i
                className="fa-solid fa-cart-shopping fa"
                style={{ color: "white" }}
              ></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
