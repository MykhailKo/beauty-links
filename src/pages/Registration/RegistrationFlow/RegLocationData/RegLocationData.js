import React, { useEffect, useState } from "react";

import Switcher from "../../../../components/Switcher/Switcher";
import RegInput from "../../../../components/RegInput/RegInput";
import SecTitle from "../../../../components/SecTitle/SecTitle";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import Button from "../../../../components/Button/Button";

import styles from "./RegLocationData.module.scss";
import { useHttp } from "../../../../hooks/useHttp";

const RegLocationData = ({ LocationData, setLocationData, nextStep }) => {
  const [locationError, setLocationError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { request, loading } = useHttp();

  const getLatLong = async (address) => {
    try {
      const formattedAdress = address.split(" ").join("%20");
      const response = await request(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAdress}&key=${process.env.REACT_APP_API_GMAPS}`
      );
      console.log(response);
      if (response?.results?.length === 0) {
        throw new Error(
          "Не найдено такого адреса. Убедитесь что вы правильно его ввели."
        );
      } else {
        const { lat, lng } = response.results[0].geometry.location;
        return { lat, lng };
      }
    } catch (error) {
      console.log(error);
      setLocationError(error.message);
    }
  };
  const sumbit = async (e) => {
    try {
      e.preventDefault();
      const latLng = await getLatLong(LocationData.SalonAddress);
      if (latLng) {
      }
    } catch (error) {}
  };
  const validateLocation = (value) => {
    if (value === "") {
      setLocationError("Необходимо указать адрес вашего места работы");
    } else {
      setLocationError("");
    }
  };
  useEffect(() => {
    if (LocationData.SalonAddress === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [LocationData.SalonAddress]);
  return (
    <div>
      <SecTitle text={"Ваше расположение для работы"} />
      <SubTitle
        text={
          "Вы можете выбрать своё удобное место для работы. Предложение действительно для выездных либо услуг в салоне."
        }
      />
      <form className={styles.LocationForm}>
        <div className={styles.WorkType}>
          <div className={styles.title}>Выездные услуги</div>
          <Switcher
            state={LocationData.mobile}
            switchState={(state) => {
              setLocationData({ ...LocationData, mobile: state });
            }}
          />
        </div>
        <div className={styles.WorkType}>
          <div className={styles.title}>Работа в салоне</div>
          <Switcher
            state={LocationData.salon}
            switchState={(state) =>
              setLocationData({ ...LocationData, salon: state })
            }
          />
        </div>
        <RegInput
          value={LocationData.SalonName}
          onChange={(e) =>
            setLocationData({ ...LocationData, SalonName: e.target.value })
          }
          label={"Название вашего салона (необязательно)"}
        />
        <RegInput
          value={LocationData.SalonAddress}
          onChange={(e) => {
            validateLocation(e.target.value);
            setLocationData({ ...LocationData, SalonAddress: e.target.value });
          }}
          error={locationError}
          label={"Укажите адрес вашего салона"}
          required={true}
        />
        <Button onClick={sumbit} text="Продолжить" disabled={buttonDisabled} />
      </form>
    </div>
  );
};

export default RegLocationData;
