import "../../styles/productCard.css";
import Product from "./Product";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="mycontainer">
        <div className="Product">
          <div className="titleFlex">
            <p>Favourite products</p>
            <p>see all</p>
          </div>
          <div className="productCardWrapper">
       <Link to={"/product/18y83"} className="linkreset">  <Product/></Link>
       <Link to={"/product/18y83"} className="linkreset">  <Product/></Link>
       <Link to={"/product/18y83"} className="linkreset">  <Product/></Link>
       <Link to={"/product/18y83"} className="linkreset">  <Product/></Link>
     
         
            
          </div>

          <div className="titleFlex">
            <p>Best rated stores</p>
            <p>see all</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
