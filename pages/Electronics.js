import Navbar from "@/Components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { add } from "@/public/store/Cartslice";
import { useDispatch } from "react-redux";
const Electronics = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching Electronics:", error);
      }
    };

    fetchData();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <Navbar />
      <div className="productsshow">
        {products.map((product) => (
          <section
            key={product.id}
            style={{
              border: "  0.1rem solid rgba(128, 128, 128, 0.432)",
              backgroundColor: "#f1efef",
              borderRadius: "1rem",
            }}
            className="text-gray-600 body-font "
          >
            <div className="container px-3 py-3   ">
              <Link
                href={`/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="flex flex-wrap -m-6 ">
                  <span className="block relative  overflow-hidden ">
                    <img
                      className="img hover:scale-105 transition-transform duration-300 ease-out"
                      alt="ecommerce"
                      src={product.image}
                    />
                  </span>
                  <div className="mt-4 ml-5">
                    <div>
                      <h3 className="title">{product.title}</h3>
                    </div>
                    <h3 className="category">{product.category}</h3>
                    <div className="description">{product.description}</div>
                    <div>
                      <p className="price">
                        Price <span> </span>
                        <span style={{ fontWeight: "bold" }}>
                          ${product.price}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <button
                onClick={() => handleAdd(product)}
                style={{
                  backgroundColor: "black",
                  width: "16.5rem",
                  height: "2.6rem",
                  borderRadius: "0.5rem",
                  marginTop: "2.5rem",
                  marginLeft: "-0.3rem",
                }}
              >
                <span
                  style={{
                    marginLeft: "0.5rem",
                    fontStyle: "normal",
                    color: "white",
                    letterSpacing: "0.1rem",
                    fontSize: "0.8rem",
                    height: "2.5rem",
                    fontWeight: "500",
                    fontFamily: "Montserrat",
                  }}
                >
                  Add To Cart
                  <span>
                    <span
                      className="fa-solid fa-cart-shopping fa-xl"
                      style={{ color: "white" }}
                    />
                  </span>
                </span>
              </button>
              <div></div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Electronics;
