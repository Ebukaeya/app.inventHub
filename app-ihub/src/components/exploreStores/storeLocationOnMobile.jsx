import GoogleMap from "../map/GoogleMap";

const StoreLocationOnMobile = ({ closeMap }) => {
  return (
    <>
      <div className='mobleGoogleLoc8363Wrapper'>
        <div className='mobileMapcontainer'>
          <div className='googleMapRenderDIv22'>
            <GoogleMap />
          </div>
          <div className='StoreOpeningHours21'>
            <h4>Opening hours</h4>
            <div className='openingHoursDiv12'>
              <div>
                <span className='daysTitleOpen'>Monday</span> <span>8:00am to 5:00pm</span>
              </div>
              <div>
                <span className='daysTitleOpen'>Tuesday</span> <span>8:00am to 5:00pm</span>
              </div>
              <div>
                <span className='daysTitleOpen'>Wednesday</span> <span>8:00am to 5:00pm</span>
              </div>
              <div>
                <span className='daysTitleOpen'>Thursday</span> <span>8:00am to 5:00pm</span>
              </div>
              <div>
                <span className='daysTitleOpen'>Friday</span> <span>8:00am to 5:00pm</span>
              </div>
              <div>
                <span className='daysTitleOpen'>Saturday</span> <span>8:00am to 5:00pm</span>
              </div>
              <div>
                <span className='daysTitleOpen'>Sunday</span> <span>8:00am to 5:00pm</span>
              </div>
            </div>
            
          </div>
          <div className="viewOnGMapDiv">
<button onClick={()=>closeMap(false)}>Close</button>
<button>View on Map</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreLocationOnMobile;
