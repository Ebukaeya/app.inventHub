import "../../styles/bottomNavigation.css";
import { RiHomeFill, RiShoppingCartFill } from "react-icons/ri";
import { BsBagFill, BsFillHeartFill } from "react-icons/bs";

const BottomNavigation = () => {


  return (
    <>
      <div className="BottomNavWrapper">
        <RiHomeFill color="#bdbcb8" size={30} />

        <BsBagFill color="#bdbcb8"  size={28} />

        <div  className="cart ">
          <RiShoppingCartFill size={30} />
          <div>
            <p>3</p>
          </div>
        </div>

        <BsFillHeartFill color="#bdbcb8" size={28} />
      </div>
    </>
  );
};

export default BottomNavigation;
