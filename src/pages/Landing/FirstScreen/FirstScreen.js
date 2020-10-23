import React, {useState} from "react";

import {useHistory} from "react-router-dom";
import styles from "./first-screen.module.scss";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";

import {useHttp} from "../../../hooks/useHttp";

import servs from "../../../pages/UserProfile/MasterServices/services.json";

const FirstScreen = () => {
  const [searchAddress, setSearchAddress] = useState();
  const [searchCategory, setSearchCategory] = useState();
  const {request} = useHttp();
  const history = useHistory();
  const categories = servs.map((s) => new Object({ text: s.name }));

  // const fetchCategories = async () => {
  //   try{
  //     const response = await request(
  //       "/api/v1.0/services", "GET", null, {}
  //     );
  //     if(response.status === 200) {
  //       setServices(response);
  //     }
  //   }catch(error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className={"container"}>
      <section className={styles.firstScreenSec}>
        <div className={styles.titleBlock}>
          <h1 className={styles.mainTitle}>
            Мастера красоты и здоровья вашего города
          </h1>
          <h2 className={styles.secondaryTitle}>
            Найдите ближайшего специалиста всего в 3 клика
          </h2>
        </div>
        <form className={styles.searchForm}>
          <Input placeholder={"Введите адрес"} filled={true} onChange={(event) => setSearchAddress(event.target.value)} />
          <Select
            filled={true}
            options={categories}
            theme={"common"}
            filled={true}
            id={"cat"}
            onChange={(event) => setSearchCategory(event.target.value)}
          />
          <Button text={"Поиск"} onClick={() => history.push({
            pathname: '/search',
            state: { searchAddress, searchCategory }
          })} />
        </form>
        <div className={styles.imageBlock}>
          <div className={styles.girlImg}></div>
        </div>
      </section>
    </div>
  );
};

export default FirstScreen;
