import { useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const style = {
  container: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    background: "rgba(64, 64, 44, 0.66)",
    backDropFilter: "blur(30.4px)",
    "-webkitBackdropFilter": "blur(13.4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Spinner = () => {
  return (
    <>
      <div style={style.container}>
       <FadeLoader color={"#1CCCE9"} /> 
      </div>
    </>
  );
};

export default Spinner;
