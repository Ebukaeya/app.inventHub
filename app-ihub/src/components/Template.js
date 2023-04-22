import "../styles/template.css";
import { RiDashboardFill } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
//import Narbar from "../components/narbar/Narbar";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Narbar from "./narbar/Narbar";

const Template = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClick = (e, path) => {
    navigate(path);
  };

  return (
    <>
      {/* <Narbar /> */}
      <Narbar/>
      <div className='TemplateContain'>
        <div className='templateWrapper'>
          <div>
            <div className='StorePlaceholder'></div>
            <div className={"sideMenu12"}>
              <div className={location.pathname.includes("/dashboard") ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/dashboard")}>
                <RiDashboardFill />
                <span>My Orders</span>
              </div>

              <div
                className={location.pathname.includes("/mystores") ? "clickedOption" : ""}
                onClick={(e) => {
                  handleClick(e, "/explorestores");
                }}
              >
                <IoStorefrontSharp />
                <span>Explore stores</span>
              </div>
              <div className={location.pathname === "/employees" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/employees")}>
                <IoStorefrontSharp />
                <span>Employees</span>
              </div>
              <div className={location.pathname === "/customers" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/customers")}>
                <IoStorefrontSharp />
                <span>Customers</span>
              </div>
              <div className={location.pathname === "/sales-record" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/sales-record")}>
                <IoStorefrontSharp />
                <span>Sales record</span>
              </div>
              <div className={location.pathname === "/payout" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/payout")}>
                <IoStorefrontSharp />
                <span>Payouts</span>
              </div>
            </div>
            <div className='signOutDiv'>
              <div>a</div>
              <div>Sign out</div>
            </div>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Template;
