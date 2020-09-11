import React from "react";

import Switcher from "../../../../components/Switcher/Switcher";
import RegInput from "../../../../components/RegInput/RegInput";
import RegSubTitle from "../../RegSubTitle/RegSubTitle";
import RegTitle from "../../RegTitle/RegTitle";

const RegLocationData = ({ regFullData, setRegFullData, nextStep }) => {
  return (
    <div>
      <RegTitle text={"Ваше расположение для работы"} />
      <RegSubTitle
        text={
          "Вы можете выбрать своё удобное место для работы. Предложение действительно для выездных либо услуг в салоне."
        }
      />
      <form>
        <div>
          <div>Выездные услуги</div>
          <Switcher
            state={regFullData.exitService}
            switchState={(state) =>
              setRegFullData({ ...regFullData, exitService: state })
            }
          />
        </div>
        <div>
          <div>Работа в салоне</div>
          <Switcher
            state={regFullData.workAtSalon}
            switchState={(state) =>
              setRegFullData({ ...regFullData, workAtSalon: state })
            }
          />
        </div>
        <RegInput label={"Название вашего салона (необязательно)"} />
        <RegInput label={"Найдите адрес вашего салона"} required={true} />
      </form>
    </div>
  );
};

export default RegLocationData;
