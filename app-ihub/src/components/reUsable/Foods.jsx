import {BsStarHalf} from "react-icons/bs";

const Foods = () => {
  return (
    <>
      <div className="foodCarddiv">
        <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655726270/samples/Ihub-Consumer-App/download_rznhgu.jpg" />
        <div>
          <span className="foodName">maginfood ff fjn fjknf fkn rq3e</span>
          <div className="foodPrice">
            <span>$ 200</span>
            <span>
                <BsStarHalf />
               <span> 4.5</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foods;
