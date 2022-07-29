const Product = ({ productDetail }) => {
  

  

  if (typeof productDetail === "object") {
  
  }

  return (
    <>
      <div className="productCard">
        <div>
          <img src={"https://ihub.toxsl.in" + productDetail?.stock.product_image[0]?.upload} />
        </div>
        <div className="productText">
          <p>{productDetail?.product_name}</p>
          <div>
            <span>Kr {productDetail?.stock.unit_price} </span>
            <span>per {productDetail?.stock.unit.unit}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
