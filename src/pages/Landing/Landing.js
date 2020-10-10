import React from "react";

import FirstScreen from "./FirstScreen/FirstScreen";
import InfoChecks from "./InfoChecks/InfoChecks";
import ServiceCatList from "./ServiceCatList/ServiceCatList";
import SearchBanner from "./SearchBanner/SearchBanner";
import GuarantiesBlock from "./GuarantiesBlock/GuarantiesBlock";
import RegisterNow from "./RegisterNow/RegisterNow";
import HowItWorks from "./HowItWorks/HowItWorks";

const list1 = [
  { text: "поиск по геолокации, возможность вызова мастера на дом" },
  { text: "онлайн оплата, безопасная сделка" },
  { text: "возврат стоимости в случае неоказания услуги" },
  { text: "подтвержденные номера телефонов" },
  { text: "реальные отзывы клиентов, которые уже воспользовались услугами" },
  {
    text:
      "возможность проверить наличие у специалиста необходимых сертификатов, дипломов до заказа услуги",
  },
  { text: "реальные фото работ мастера" },
  { text: "регулярные скидки, акции и бонусы за пользование сервисом" },
];

const list2 = [
  { text: "быстрый старт, без вложений на раскрутку и рекламу" },
  { text: "прозрачность и фиксация всех выплат напрямую на банковскую карту" },
  { text: 'личный кабинет с расписанием и функцией "выходного дня"' },
  {
    text:
      "большой потенциал для роста, в отличии от соц. сетей и непрофильных сервисов вся аудитория является целевой",
  },
  { text: 'возможность заполнить "окна" в своем расписании' },
  { text: "возможность продвижения своего профиля на платформе" },
  { text: "реальные фото работ мастера" },
  { text: "сохранение рейтинга и клиентов в случае смены места работы" },
];

const list3 = [
  { text: "нет свободного времени для планирования похода в салоны красоты" },
  { text: "хочу найти мастера/салон рядом с домом, заказать услугу на дом" },
  {
    text:
      "нет возможности записаться к своему мастеру (нет постоянного мастера)",
  },
  {
    text:
      "необходимо ехать на незапланированное мероприятие или встречу, услуга нужна срочно",
  },
  { text: "приехал в другой город (конференции, командировки и т.д.)" },
  { text: "хочу исправить ошибки прошлых мастеров" },
  { text: "предпочитаю онлайн-оплаты" },
];

const list4 = [
  { text: "предоставляю услуги в бьюти индустрии" },
  { text: "хочу заявить о себе на рынке, создать свой бренд" },
  {
    text:
      "не имею возможности, стартового капитала для создания и продвижения своего сайта, страницы в инстаграме или фейсбуке",
  },
  {
    text:
      "имею круг своих клиентов, но хочу его расширить и заполнить свободные часы",
  },
  {
    text:
      "являюсь владельцем салона/клиники, хочу продвижения в онлайне и охват новой целевой аудитории",
  },
];

const Landing = () => {
  return (
    <main>
      <FirstScreen />
      <InfoChecks
        secTitle={"Чем мы будем полезны"}
        firstTitle={"Клиентам"}
        firstList={list1}
        secondTitle={"Мастерам-специалистам"}
        secondList={list2}
      />
      <ServiceCatList secTitle={"Услуги, которые пользуются популярностью"} />
      <InfoChecks
        secTitle={"Почему именно мы?"}
        firstTitle={"Клиентам"}
        firstList={list3}
        secondTitle={"Специалистам"}
        secondList={list4}
      />
      <SearchBanner title={"Там, где вам удобно"} />
      <HowItWorks />
      <RegisterNow />
      <GuarantiesBlock />
    </main>
  );
};

export default Landing;
