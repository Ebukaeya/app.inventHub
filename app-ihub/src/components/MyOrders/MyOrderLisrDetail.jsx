import Template from "../Template";
import { MyOrderDetails } from "./MyOrderMain";
import SingleOrder from "./SingleOrder";

const MyOrderListDetail = (props) => {
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
      </Template>
    </>
  );
};

export default MyOrderListDetail;
