import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { useState } from "react";

const style = {
  input: {
    width: "80%",
    height: "70%",
    fontFamily: "nunito, sans-serif",
    fontSize: "18px",
    backGroundColor: "blue",
    border: "none",
  },
  wrapper: {
    width: "100%",
    height: "45px",
    borderRadius: "10px",
    boxShadow: "0px 0.1px 20px rgba(207, 222, 250,0.7)",
    display: "flex",
    alignItems: "center",
    padding: "0px 10px",
    boxSizing: "border-box",
    gap: "15px",
    color: "gray",
  },
};

const SearchBar = ({ controlInput }) => {
  const [search, setSearch] = useState("");

  controlInput(search);
  return (
    <>
      <div className="mycontainer">
        <div style={style.wrapper}>
          <BsSearch size={20} />{" "}
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style={style.input}
            type="text"
            placeholder="Search"
            className="searchBar"
          />
          <BiMicrophone size={24} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
