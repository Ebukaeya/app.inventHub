import GoogleMapReact from "google-map-react";
import { useCallback, useMemo, useRef, useState } from "react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GoogleMap = () => {
  const center = useMemo(
    () => ({
      lat: 55.653820,
      lng: 12.503050,
    }),
    []
  );
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      mapId: "594e106725c79a54",
    }),
    []
  );
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 12,
  };
console.log(process.env.REACT_APP_Google_Map_Api);
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_Google_Map_Api}}
          defaultCenter={center}
          defaultZoom={defaultProps.zoom}
          options={options}
        >
          <AnyReactComponent lat={55.653820} lng={12.503050} text='My Marker' />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default GoogleMap;
