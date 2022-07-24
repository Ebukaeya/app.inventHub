import { useState } from "react";

const Cardpayment = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;

    if (value.length <= 16) {
      setCardNumber(value);
    }

    /*    if (cardNumber === 4) {
      console.log("am");
      count++;
      setCardNumber(cardNumber + "am");
    } */
  };
  return (
    <>
      <div className="CarpaymentDiv">
        <p className="paymentTitleMute">Card Number</p>
        <input
          placeholder="* * * *   * * * *   * * "
          className="cardNumberInput"
          value={cardNumber}
          type={"number"}
          onChange={(e) => handleInput(e)}
        />

        <div>
          <div>
            <p className="paymentTitleMute">Expiry Date</p>
            <input placeholder="MM/YY" />
          </div>
          <div>
            <p className="paymentTitleMute">CVV/CVC</p>
            <input placeholder="123" />
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Cardpayment;
