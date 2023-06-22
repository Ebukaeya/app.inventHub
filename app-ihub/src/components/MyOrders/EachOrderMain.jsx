import { useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useState, useEffect } from "react";
const EachOrderMain = ({ order, setSelectedOrder, selectedOrder }) => {
  const [isSelected, setIsSelected] = useState(false); // this is to change the border color of the selected order
  const navigate = useNavigate();

  useEffect(() => {
    if (order && selectedOrder && order._id === selectedOrder._id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedOrder]);

  return (
    <>
      <div onClick={() => setSelectedOrder(order)} className={isSelected ? "eachOrderMainItemList selectedEachOrder " : "eachOrderMainItemList"}>
        {" "}
        {/* selectedEachOrder */}
        <div className='priceHeaderDiv33'>
          <div>
            <p className='caption4r'>Date</p>
            <p className='caption293e'> {order.orderDate.split("T")[0]} </p>
          </div>
          <div>
            <p className='caption4r'>Total price</p>
            <p className='caption293e'>$ {order.totalBreakDown.totalPaid} </p>
          </div>
          <div className='flexingContainer21'>
            <div>
              <p className='caption4r'>Order status</p>
              <p className='caption293e'> {order.orderStatus} </p>
            </div>
            <p>
              <AiOutlineRight size={12} color='gray' />
            </p>
          </div>
        </div>
        <div className='orderImageDisplayDiv345'>
          <div className='OrderImageDivRow2'>
            {order.purchasedItems.slice(0, 3).map((item) => {
              return (
                <div>
                  <img src={item.productImage[0]} />
                </div>
              );
            })}
          </div>
          {order.purchasedItems.length > 4 && <span>+ {order.purchasedItems.length - 4} </span>}
        </div>
        <div onClick={() => navigate("kfhe8fuvjefi", { state: { order } })} className='hideOnWeb22'></div>
      </div>
    </>
  );
};

export default EachOrderMain;
