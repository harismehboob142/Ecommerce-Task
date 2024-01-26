import Link from "next/link";
import Navbar from "@/Components/Navbar";
import { useDispatch } from "react-redux";
import { add } from "@/public/store/Cartslice";
const productid = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <Navbar />
      <Link href={"/"}>
        <h1
          style={{
            marginLeft: "14rem",
            fontWeight: "bold",
            fontSize: "1.6rem",
            marginBottom: "2rem",
          }}
        >
          Back
        </h1>
      </Link>
      <div className="singlepage" key={product.id}>
        <div className="image">
          <img src={product.image} alt="product image" />
        </div>
        <div className="data" style={{ fontFamily: "serif" }}>
          <h1 style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
            {product.title}
          </h1>
          <br />
          <h3 style={{ color: "gray", marginBottom: "0.4rem" }}>Category</h3>
          <h3 style={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {product.category}
          </h3>
          <br />
          <h3 style={{ color: "gray", marginBottom: "0.4rem" }}>Description</h3>
          <h3>{product.description}</h3>
          <br />
          <h3 style={{ color: "gray" }}>Price</h3>
          <h3 style={{ fontWeight: "bold", paddingTop: "0.3rem" }}>
            ${product.price}
          </h3>
          <button
            onClick={() => handleAdd(product)}
            style={{
              width: "25rem",
              height: "3rem",
              backgroundColor: "black",
              color: "white",
              borderRadius: "0.3rem",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default productid;
