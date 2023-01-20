import React from "react";
import styles from "./Sixthblock.module.css";
import { Link } from "react-router-dom";

export default function Sixthblock() {
  return (
    <div className={styles.container}>
      <div className={styles.textblock}>
        <h1>ПРОВЕРКА ЗРЕНИЯ</h1>
        <p>
          Это занимает около 30 минут, абсолютно бесплатно и доступно для всех
          старше 18 лет. Необходима предварительная запись.
        </p>
        <p>
          Вы получите рекомендацию наших специалистав и рецепт, который поможет
          выбрать нужные линзы в DiamondEye
        </p>
      </div>
      <Link to={"/test"} className={styles.link}>
        <button className={styles.button}>Читать подробнее</button>
      </Link>
    </div>
  );
}
