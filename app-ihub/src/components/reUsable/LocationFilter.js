import "../../styles/locationFilter.css";
import { ImLocation } from "react-icons/im";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

const LocationFilter = (props) => {
  const { curentlocationFilter, updateLocationFliter } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [filter, setLocationFilter] = useState();

  let body = document.querySelector("body")

  

  const closeField = (e) => {
    if (e.target.className === "filterField") {
      setIsFieldOpen(false);
      body.style.overflow= "auto"
      
    }
  };
  const openField = ()=>{
    setIsFieldOpen(true)
    body.style.overflow="hidden"
    
  }

  const handleSubmit = () => {
    updateLocationFliter(filter);
    setIsFieldOpen(false);
    body.style.overflow= "auto"
  };

  return (
    <>
      <div onClick={() => openField()} className="filterbutton">
        <div>
          <ImLocation size={24} />
          <p className="nearby">nearby</p>
        </div>
      </div>
      {isFieldOpen && (
        <div className="filterField" onClick={(e) => closeField(e)}>
          <div>
            <div className="useLocation">
              <ImLocation size={25} />
              <p className="locationtextp">Use my current location</p>
            </div>
            <div
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
              className="clocationWrapper"
            >
              <div className="customLocation">
                <BiCurrentLocation size={25} />
                <p className="locationtextp">Use my current location</p>
              </div>
              {isOpen && (
                <div className="searchLoFieldWrapper">
                  <input
                    value={filter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="searchInputLo"
                    autoFocus
                    placeholder="Enter location"
                  />
                  <button onClick={handleSubmit}>Search</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationFilter;
