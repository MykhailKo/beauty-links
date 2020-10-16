import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../../../hooks/useHttp";
import MasterPage from "../MasterPage";

import styles from "./MasterContacts.module.scss";

const MasterContacts = ({
  phone,
  address,
  socnet = {
    pint: "pinterest.com",
    fb: "facebook.com",
    inst: "instagram.com",
  },
}) => {
  const [numberShown, setNumberShown] = useState(false);
  const [addressByGoogle, setAddressByGoogle] = useState(
    "Адрес не предоставлен"
  );
  const fetchLocation = useCallback(async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${address.lat},${address.lon}&key=${process.env.REACT_APP_API_GMAPS}&language=ru&region=RU`
      );
      const data = await response.json();
      console.log(data.results[0].formatted_address);
      setAddressByGoogle(data.results[0].formatted_address);
    } catch (error) {}
  }, [address.lat, address.lon]);
  useEffect(() => {
    fetchLocation();
    console.log(process.env.REACT_APP_API_GMAPS);
  }, [fetchLocation]);
  return (
    <div className={styles.contactsWrap}>
      <iframe
        title={"map"}
        className={styles.map}
        id={"gmap_canvas"}
        src={`https://maps.google.com/maps?q=${address.lat},${address.lon}&key=${process.env.REACT_APP_API_GMAPS}&language=ru&region=UK&output=embed`}
        frameBorder={"0"}
        scrolling={"no"}
        marginHeight={"0"}
        marginWidth={"0"}
      ></iframe>
      <div className={styles.address}>
        <span />
        {addressByGoogle}
      </div>
      <div className={styles.phoneBlock}>
        <div
          className={styles.showPhone}
          onClick={() => setNumberShown(!numberShown)}
        >
          <span></span>Показать номер телефона
        </div>
        {numberShown && <a href={`tel:${phone}`}>(+38){phone}</a>}
      </div>
      <div className={styles.socNet}>
        <span>Присоединяйтесь в соцсетях:</span>
        <ul>
          <a href={socnet.pint}>
            <li
              style={{
                backgroundImage: "url(/assets/img/icons/pinterest.png)",
              }}
            ></li>
          </a>
          <a href={socnet.fb}>
            <li
              style={{ backgroundImage: "url(/assets/img/icons/fb-color.png)" }}
            ></li>
          </a>
          <a href={socnet.inst}>
            <li
              style={{
                backgroundImage: "url(/assets/img/icons/inst-color.png)",
              }}
            ></li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default MasterContacts;
