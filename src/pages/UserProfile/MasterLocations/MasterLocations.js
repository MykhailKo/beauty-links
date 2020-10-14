import React, { useCallback, useContext, useEffect, useState } from "react";
import Preloader from "../../../components/Preloader/Preloader";

import ProfileTitle from "../../../components/ProfileTitle/ProfileTitle";
import Button from "../../../components/Button/Button";
import authContext from "../../../context/auth.context";
import { useHttp } from "../../../hooks/useHttp";
import CustomMap from "./CustomMap";

import styles from "./MasterLocations.module.scss";

const MasterLocations = (props) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationUpdated, setLocationUpdated] = useState(false);
  const { request, loading } = useHttp();
  const { token } = useContext(authContext);

  const setLocalLocation = async (location) => {
    try {
      setLocationUpdated(true);
      const response = await request(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latLng.lat()},${location.latLng.lng()}&key=${
          process.env.REACT_APP_API_GMAPS
        }&language=en&region=UA`
      );
      delete response.status;
      const newAddress = {
        country_name: response.results[0].address_components.filter((el) =>
          el.types.includes("country")
        )[0]?.long_name,
        country_id: response.results[0].address_components.filter((el) =>
          el.types.includes("country")
        )[0]?.short_name,
        city: response.results[0].address_components.filter((el) =>
          el.types.includes("locality")
        )[0]?.long_name,
        address: `${
          response.results[0].address_components.filter((el) =>
            el.types.includes("route")
          )[0]?.long_name
        }, ${
          response.results[0].address_components.filter((el) =>
            el.types.includes("street_number")
          )[0]?.long_name
        }`,
        postcode: response.results[0].address_components.filter((el) =>
          el.types.includes("postal_code")
        )[0]?.long_name,
      };
      setCurrentLocation((currentLocation) => ({
        ...currentLocation,
        salon: {
          ...currentLocation.salon,
          address: {
            ...newAddress,
            location: {
              lat: location.latLng.lat(),
              lng: location.latLng.lng(),
            },
          },
        },
      }));
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
      delete response.status;
      setCurrentLocation(response);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, [request, token]);
  const sendLocation = async () => {
    try {
      const response = await request(
        "/api/v1.0/profile/master/locationtypes",
        "PUT",
        currentLocation,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (response.status === 200) {
        setLocationUpdated(false);
        alert("Данные успешно сохранены!");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  useEffect(() => {
    const location = fetchLocation();
    setCurrentLocation(location);
  }, [fetchLocation]);

  return (
    <div className={styles.basicsWrap}>
      <ProfileTitle
        title={"Локации"}
        subTitle={"Укажите своё местоположение на карте"}
      />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div
            className={styles.adress}
          >{`${currentLocation?.salon?.address?.country_name}, ${currentLocation?.salon?.address?.city}, ${currentLocation?.salon?.address?.address}, ${currentLocation?.salon?.address?.postcode}`}</div>
          <div className={styles.mapContainer}>
            <CustomMap
              marker={currentLocation?.salon?.address?.location}
              sendLocation={setLocalLocation}
            />
          </div>
        </>
      )}
      {locationUpdated && <Button text={"Сохранить"} onClick={sendLocation} />}
    </div>
  );
};

export default MasterLocations;
