import "../../styles/bottomNavigation.css";
import { RiHomeFill, RiShoppingCartFill } from "react-icons/ri";
import { BsBagFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BottomNavigation = () => {
const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <>
   <div className="bottomNavCover">
        <div className="BottomNavWrapper">
       <Link to={"/"} className="linkreset" >   <RiHomeFill color="#bdbcb8" size={30} /></Link>
  
       <Link to={"/stores"}  className="linkreset" >   <BsBagFill color="#bdbcb8"  size={28} /></Link>
  
          <div  className="cart ">
            <Link to={"/cart"}  className="linkreset"><RiShoppingCartFill size={30} /></Link>
           { cartCount > 0 && <div>
              <p>{cartCount}</p>
            </div>}
          </div>
  
         <Link to={"/wishlist"}  className="linkreset"> <BsFillHeartFill color="#bdbcb8" size={28} /></Link>
        </div>
   </div>
    </>
  );
};

export default BottomNavigation;
