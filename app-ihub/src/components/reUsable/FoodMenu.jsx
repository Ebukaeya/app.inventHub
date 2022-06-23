import { AiFillStar } from "react-icons/ai";

const FoodMenu = () => {
  return (
    <>
      <div className="foodMenuDiv">
        <div>
            <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1656026265/samples/Ihub-Consumer-App/images_xvpyq7.jpg"/>
        </div>
        <div>
          <p>Black Pehgyg gyu e e</p>
          <div>
            <span style={{ fontSize: "12px", color: " gray" }}>24min</span>{" "}
            <span style={{ fontWeight: "800", marginBottom:"6px" }}>.</span>
            <AiFillStar color="rgb(251,212,96)" /> <span style={{ fontSize: "12px", color: " gray" }}> 4.2</span>
          </div>
          <p className="FoodPriceTag">
            {" "}
            <span>£</span> 24.60
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
