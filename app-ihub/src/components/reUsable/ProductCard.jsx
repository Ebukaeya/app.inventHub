import "../../styles/productCard.css";
import Product from "./Product";

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
         <Product/>
         <Product/>
         <Product/>
         <Product/>
            
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
