const Product = ({ productDetail }) => {
  console.log(productDetail);

  console.log(typeof productDetail);

  if (typeof productDetail === "object") {
    console.log(productDetail.stock);
  }

  return (
    <>
      <div className="productCard">
        <div>
          <img src={"https://ihub.toxsl.in" + productDetail?.stock.product_image[0].upload} />
        </div>
        <div className="productText">
          <p>{productDetail?.product_name}</p>
          <div>
            <span>$ {productDetail?.stock.unit_price} </span>
            <span>per {productDetail?.stock.unit.unit}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
