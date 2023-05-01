import { useState } from "react";

const SwitchButton = () => {
  const [useVoucher, setUseVoucher] = useState(true);

  let backGroundColor = useVoucher ? "#157ED4" : "rgb(199, 205, 216)";

  const handleClick = () => {
    let switchNode = document.querySelector(".radioBuBase>div");
    if (useVoucher) {
      setUseVoucher(false);
      switchNode.style.transform = "translateX(-34px)";
    } else {
      setUseVoucher(true);
      switchNode.style.transform = "translateX(0)";
    }
  };

  return (
    <>
      <div style={{ backgroundColor: backGroundColor }} className="radioBuBase">
        <div onClick={handleClick}></div>
      </div>
    </>
  );
};

export default SwitchButton;
