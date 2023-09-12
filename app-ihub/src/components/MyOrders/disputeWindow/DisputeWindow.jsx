import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import { raiseDisputeUrl } from "../../../api/StoreAPI";

const DisputeWindow = ({ closeModel, updateDispute, item,consumerOrderID,socket,refetchOrder,setSelectedOrder}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [disputeReason, setDisputeReason] = useState({
    reason: "",
    placeholder: "Select dispute reason",
  });

  let bgColor = disputeReason.reason ? "rgb(248,56,30)" : "rgb(224,224,224)";

  const openDropDown = () => {
    setIsOpen(true);
    const dropdown = document.querySelector(".DisputeDropdown");
    dropdown.style.display = "block";
  };

  const updateDisputeReason = () => {
    if (disputeReason.reason) {
      raiseDispute();
      updateDispute(disputeReason.reason);
      setIsOpen(false);
      enableVPScroll();
    }
  };

  const enableVPScroll = () => {
    let body = document.querySelector("body");
    body.style.overflow = "auto";
  };

 const raiseDispute = async() => {

  try {
    let response = await fetch(raiseDisputeUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        linkedPayoutID:item.linkedPayoutID,
        disputeReason:disputeReason.reason,
        productID:item._id,
        consumerOrderID,
        idToQueryStoreReceievedOrder:consumerOrderID+"STORE"+ item.storeID, /* to query store received order "STORE" was added inbetween to split when necessary */
      }),
    });
    if(response.ok){
      socket.emit('newDisputeRaised',{room:item.storeID,item:item.name,disputeReason:disputeReason.reason, storeName:item.storeName,webstoreUserID:item.webstoreUserID, productImage:item.productImage[0]})
      /* refetch item */
      refetchOrder()
      let {message, updatedOrder} = await response.json();
      console.log(message,updatedOrder,"dispute raised");
      setSelectedOrder(updatedOrder)
    }

    
  } catch (error) {
    console.log(error,"raising dispute error");
  }


 };

  return (
    <>
      <div className="DisputeWindowWrapper">
        <div className="DisputeWindowDiv">
          <p>Dispute Reason</p>
          <div onClick={openDropDown} className="DisputeRP">
            <p>
              {disputeReason.reason
                ? disputeReason.reason
                : disputeReason.placeholder}
            </p>
            {isOpen ? <BsChevronUp /> : <BsChevronDown />}
          </div>
          <div className="DisputeDropdown">
            <div className="DisputeRPOption">
              <p
                onClick={(e) =>
                  setDisputeReason({
                    ...disputeReason,
                    reason: e.target.innerText,
                  })
                }
              >
                Item was not delivered
              </p>
              <p
                onClick={(e) =>
                  setDisputeReason({
                    ...disputeReason,
                    reason: e.target.innerText,
                  })
                }
              >
                Different Item was delivered
              </p>
              <p
                onClick={(e) =>
                  setDisputeReason({
                    ...disputeReason,
                    reason: e.target.innerText,
                  })
                }
              >
                Item is damaged
              </p>
            </div>
            <div className="RaiseDisputeBtnDiv">
              <div
                onClick={() => {
                  enableVPScroll();
                  closeModel(false);
                }}
              >
                Cancel
              </div>
              <div
                style={{ backgroundColor: bgColor }}
                onClick={updateDisputeReason}
              >
                Raise
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisputeWindow;
