import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Preloader from "../../../components/Preloader/Preloader";

const CustomMap = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_GMAPS,
  });
  if (loadError) {
    return <div>error</div>;
  }
  if (!isLoaded) {
    return <Preloader />;
  }
  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      zoom={15}
      center={props.marker}
      onClick={props.sendLocation}
    >
      <Marker clickable={false} position={props.marker} />
    </GoogleMap>
  );
};

export default CustomMap;
