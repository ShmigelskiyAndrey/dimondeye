import React from "react";
import styles from "./Secondblock.module.css";

export default function Secondblock() {
  return (
    <div className={styles.textblock}>
      <div className={styles.heading}>
        <h1>Мы</h1>
      </div>
      <div className={styles.container}>
        <p>
          Современная оптика родом из Екатеренбурга. Производим оправы для
          разных типов очков, оказываем полный спектр услуг по линзам, а также
          поможем вам подобрать идеальныю модель на ваше зрение.
        </p>
        <p>
          У нас работают профессионалы своего дела, поэтому{" "}
          <span>доверьтесь нам.</span>
        </p>
        <p>
          Нам кажется, что современная оптика — это не сто салонов в городе, а
          удобный интерфейс, актуальный дизайн, понятная услуга и человеческий
          сервис.
        </p>
      </div>
    </div>
  );
}
