import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";



const Product2  = ()=>{



    return(
        <>
  <div className="Store2Products">
            <div>
              <Link
                to={"/product/productID"}
                className="linkreset"
                style={{ width: "100%", height: "100%" }}
              >
                {" "}
                <img
                  className="Store2ProductsImag"
                  src="https://res.cloudinary.com/ebuka1122/image/upload/v1655939583/samples/Ihub-Consumer-App/images_o9oqbm.jpg"
                />
              </Link>
            </div>
            <div>
              <p>Apple</p>
              <p>Iphone 13 pro</p>
              <ReactStars value={4} />
              <p className="sizeSD2">
                size <b style={{ marginLeft: "4px", color: "black" }}>NA</b>{" "}
              </p>
              <p>£400</p>
            </div>
          </div>
        </>
    )
}


export default Product2;