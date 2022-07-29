import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Product2 = ({ product }) => {
  return (
    <>
      <div className="Store2Products">
        <div>
          <Link
            to={`/product/${product?.id}`}
            className="linkreset"
            style={{ width: "100%", height: "100%" }}
          >
            {" "}
            <img
              className="Store2ProductsImag"
              src={
                "https://ihub.toxsl.in" + product?.stock.product_image[0]?.upload
              }
            />
          </Link>
        </div>
        <div>
          <p>{product.stock.brand}</p>
          <p>{product.product_name}</p>
          <ReactStars value={product.rating} />
          <p className="sizeSD2">
            size{" "}
            <b style={{ marginLeft: "4px", color: "black" }}>
              {product?.stock.size ? product.stock.size : "NA"}
            </b>{" "}
          </p>
          <p>£ {product.stock.unit_price}</p>
        </div>
      </div>
    </>
  );
};

export default Product2;
