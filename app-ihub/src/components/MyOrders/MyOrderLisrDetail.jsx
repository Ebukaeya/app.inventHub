import Template from "../Template";
import EachOrder from "./EachOrder";
import { MyOrderDetails } from "./MyOrderMain";
import SingleOrder from "./SingleOrder";
import { useState } from "react";

const MyOrderListDetail = (props) => {
  const [showEachOrderDetails, setShowEachOrderDetails] = useState(false);
  return (
    <>
      <Template>
        <div className='divMyOrderList774'>
          <div>
            <h4 className='backHeader83'>My Orders</h4>
            <div className='RorderTitle'>
              <p>15 items</p>
              <div>
                {" "}
                <p style={{ color: "rgb(0, 128, 248)", fontWeight: "600" }}> 07, Mar, 2023</p>
              </div>
            </div>
            <SingleOrder openModal={setShowEachOrderDetails} />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />

            <div className='OrderDetailsTotal'>
              <div>
                <p>Total Order</p>
                <p>£ 9999.9</p>
              </div>
            </div>
          </div>
        </div>
        {showEachOrderDetails && (
          <div className='OrderItemDetails83Wrapper'>
            <div>
              <EachOrder closeItemDetails={setShowEachOrderDetails} />
            </div>
          </div>
        )}
      </Template>
    </>
  );
};

export default MyOrderListDetail;
