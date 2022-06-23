import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import SearchBar from "./reUsable/SearchBar";
import { useState } from "react";
import "../styles/storeDetails2.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const StoreDetails2 = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div className="mycontainer">
        <div className="NavBarProdP">
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <div className="xPStickyTap">
          <div className="storeTitleAndSearchDiv">
            <div>
              <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655643691/samples/Ihub-Consumer-App/download_pthu7h.png" />
            </div>
            <div>
              <SearchBar
                controlInput={setSearch}
                placeholder={"Search Product "}
              />
            </div>
          </div>
        </div>
        <p className="xpProducts">Explore products</p>
        <div className="Store2productWrapper">
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
                  src="https://res.cloudinary.com/ebuka1122/image/upload/v1655938516/samples/Ihub-Consumer-App/download_byv5xd.jpg"
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
        </div>
      </div>
    </>
  );
};

export default StoreDetails2;
