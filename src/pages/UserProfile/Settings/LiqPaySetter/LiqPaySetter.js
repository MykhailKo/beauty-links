import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";

import styles from "./LiqPaySetter.module.scss";
const LiqPaySetter = () => {
  const [liqpayAccount, setLiqpayAccount] = useState("");

  const submitNewLiqPayAccount = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await request(
    //     "/",

    //     "PUT",

    //     {},

    //     { Authorization: `Bearer ${token}` }
    //   );

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <form className={styles.bankForm}>
      <div className={styles.currentlyOnly}>
        На данный момент мы работаем только с LiqPay.
      </div>
      <div>
        <a href={"#"}>Как настроить свой аккаунт LiqPay?</a>
      </div>
      <Input
        placeholder={"LiqPay аккаунт"}
        name={"liqpay-account"}
        error={false}
        value={liqpayAccount}
        onChange={(e) => setLiqpayAccount(e.target.value)}
      />
      <div>
        <a href={"#"}>Привязать другую карту</a>
      </div>
      <Button text={"Привязать аккаунт"} onClick={submitNewLiqPayAccount} />
    </form>
  );
};

export default LiqPaySetter;
