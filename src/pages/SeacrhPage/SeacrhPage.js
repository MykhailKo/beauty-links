import React, { useState, useEffect } from "react";

import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";

import {useHistory} from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";

import styles from "./SearchPage.module.scss";

import servs from "../../pages/UserProfile/MasterServices/services.json";

const SearchPage = () => {
  const history = useHistory();
  const [searchAddress, setSearchAddress] = useState(history.location.state.searchAddress || "Украина, Харьков");
  const [searchCategory, setSearchCategory] = useState(history.location.state.searchCategory || '');
  const [services, setServices] = useState(servs);
  const { request } = useHttp();

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

  const categories = services.map((s) => new Object({ text: s.name }));

  return (
    <div className={styles.searchPageWrap}>
      <div className={styles.leftBg} />
      <div className={styles.searchPageContent}>
        <h2 className={styles.searchTitle}>Поиск</h2>
        <iframe
          title={"searchResultsMap"}
          className={styles.map}
          id={"gmap_canvas"}
          src={`https://maps.google.com/maps?q=${searchAddress}&output=embed`}
          frameborder={"0"}
          scrolling={"no"}
          marginheight={"0"}
          marginwidth={"0"}
        ></iframe>
        <form className={styles.searchForm}>
          <Input filled={true} type={"text"} name={"address"} />
          <Select
            filled={true}
            options={categories}
            theme={"common"}
            filled={true}
            selected={services.indexOf(services.find((s) => s.name === searchCategory))}
            id={"category"}
          />
          <Button
            text={"поиск"}
            onClick={(event) => {
              event.preventDefault();
              setSearchAddress(
                event.target.parentElement.elements["address"].value
              );
              setSearchCategory(
                event.target.parentElement.elements["category"].value
              );
            }}
          />
        </form>
        <p className={styles.hint}>
          *используя карту Вы можете выбрать мастера поблизости
        </p>
      </div>
      <div className={styles.rightBg} />
    </div>
  );
};

export default SearchPage;
