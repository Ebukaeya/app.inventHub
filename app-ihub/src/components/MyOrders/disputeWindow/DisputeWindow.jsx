import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const DisputeWindow = ({ closeModel, updateDispute }) => {
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
      updateDispute(disputeReason.reason);
      setIsOpen(false);
      enableVPScroll();
    }
  };

  const enableVPScroll = () => {
    let body = document.querySelector("body");
    body.style.overflow = "auto";
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
