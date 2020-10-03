import React, { useState } from "react";
import { useHttp } from "../../../hooks/useHttp";
import MasterPage from "../MasterPage";

import styles from "./MasterContacts.module.scss";

const MasterContacts = ({
  phone,
  address,
  socnet = {
    pint: "pinterest.com",
    fb: "facebook.com",
    inst: "instagrsam.com",
  },
}) => {
  const [numberShown, setNumberShown] = useState(false);

  return (
    <div className={styles.contactsWrap}>
      <iframe
        className={styles.map}
        id={"gmap_canvas"}
        src={`https://maps.google.com/maps?q=${address.lat},${address.lon}&output=embed`}
        frameBorder={"0"}
        scrolling={"no"}
        marginHeight={"0"}
        marginWidth={"0"}
      ></iframe>
      <div className={styles.address}>
        <span></span>
        Украина, г. Харьков, ул. Сумская 35а
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
        Присоединяйтесь в соцсетях:
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
