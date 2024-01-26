"use client";
import { fetchproduct } from "@/public/store/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/public/store/Cartslice";
import Link from "next/link";
const Products = () => {
  const dispatch = useDispatch();
  const { data: productss, status } = useSelector((state) => state.product);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    dispatch(fetchproduct());
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <div className="productsshow">
        {productss.map((product) => (
          <section
            key={product.id}
            style={{
              border: "  0.1rem solid rgba(128, 128, 128, 0.432)",
              backgroundColor: "#f1efef",
              borderRadius: "1rem",
            }}
            className="text-gray-600 body-font"
          >
            <div className="container px-3 py-3">
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

export default Products;
