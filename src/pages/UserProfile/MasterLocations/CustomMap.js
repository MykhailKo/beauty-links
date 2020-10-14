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
      zoom={18}
      center={props.marker}
      onClick={props.sendLocation}
    >
      <Marker
        clickable={false}
        position={props.marker}
        icon={{
          url: "/assets/img/mapMarker.svg",
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      />
    </GoogleMap>
  );
};

export default CustomMap;
