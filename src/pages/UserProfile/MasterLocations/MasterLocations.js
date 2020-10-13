import React, { useCallback, useContext, useEffect, useState } from "react";
import Preloader from "../../../components/Preloader/Preloader";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import authContext from "../../../context/auth.context";
import { useHttp } from "../../../hooks/useHttp";
import CustomMap from "./CustomMap";

import styles from "./MasterLocations.module.scss";

const MasterLocations = (props) => {
  const [currentMarkerLocation, setCurrentMarkerLocation] = useState(null);
  const { request, loading } = useHttp();
  const { token } = useContext(authContext);
  const getAddress = async ({ lat, lng }) => {
    try {
      const response = await request();
    } catch (error) {}
  };
  const setLocalLocation = async (location) => {
    try {
      setCurrentMarkerLocation({
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
      });
      const response = await request(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latLng.lat()},${location.latLng.lng()}&key=${
          process.env.REACT_APP_API_GMAPS
        }&language=ru&region=RU`
      );
      console.log(response.results[0]);
    } catch (error) {}
  };
  const fetchLocation = useCallback(async () => {
    try {
      const response = await request(
        "/api/v1.0/profile/master/locationtypes",
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(response.salon);
      setCurrentMarkerLocation(response.salon.address.location);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, [request, token]);
  const sendLocation = async (location) => {
    try {
      await setLocalLocation(location);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  useEffect(() => {
    const location = fetchLocation();
    setCurrentMarkerLocation(location);
  }, [fetchLocation]);
  return (
    <div className={styles.basicsWrap}>
      <ProfileTitle
        title={"Локации"}
        subTitle={"Укажите своё местоположение на карте"}
      />
      <div className={styles.adress}>Киев</div>
      <div className={styles.mapContainer}>
        {loading ? (
          <Preloader />
        ) : (
          <CustomMap
            marker={currentMarkerLocation}
            sendLocation={sendLocation}
          />
        )}
      </div>
    </div>
  );
};

export default MasterLocations;
