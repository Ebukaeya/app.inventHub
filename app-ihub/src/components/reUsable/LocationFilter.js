import "../../styles/locationFilter.css";
import { ImLocation } from "react-icons/im";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

const LocationFilter = (props) => {
  const { curentlocationFilter, updateLocationFliter } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [filter, setLocationFilter] = useState();

  const closeField = (e) => {
    if (e.target.className === "filterField") {
      setIsFieldOpen(false);
    }
  };

  const handleSubmit = () => {
    updateLocationFliter(filter);
    setIsFieldOpen(false);
  };

  return (
    <>
      <div onClick={() => setIsFieldOpen(true)} className="filterbutton">
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
