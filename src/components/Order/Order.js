import React from "react";
import styles from "./Order.module.css";

export default function Order() {
  return (
    <div className={styles.content}>
      <h1>записаться на проверку зрения </h1>
      <img src="/images/order/order1.png" alt="" />

      <div className={styles.all}>
        <div className={styles.container}>
          <div className={styles.pole}>
            <label for="cities">В каком городе вы живете?</label>
            <input list="cities" id="cities" />
            <datalist id="cities">
              <option value="г. Москва" />
              <option value="г. Санкт-Петербург" />
              <option value="г. Екатеринбург" />
              <option value="г. Новосиберск" />
              <option value="г. Казань" />
            </datalist>
          </div>
          <div className={styles.pole}>
            <label for="doctors">
              К какому специалисту вы хотите записаться?
            </label>
            <input list="doctors" id="doctors" />
            <datalist id="doctors">
              <option value="Любой" />
              <option value="Яковлев А. А." />
              <option value="Савинкова Д. О." />
              <option value="Шмигельский А. А." />
              <option value="Симоненко М. В." />
            </datalist>
          </div>
          <div className={styles.pole}>
            <label for="date">Когда вам будет удобно?</label>
            <div className={styles.time}>
              <input placeholder="Дата" id="date" />
              <input placeholder="Время" />
            </div>
          </div>
          <div className={styles.pole}>
            <label for="name">Как вас зовут?</label>
            <input id="name" />
          </div>
          <div className={styles.pole}>
            <label for="contact">Как с вами связаться?</label>
            <input id="contact" placeholder="+7 999 555 55 55" />
          </div>
        </div>
        <button onClick={() => alert("Форма успешно отправлена")}>
          Отправить
        </button>
      </div>
    </div>
  );
}
// onClick: () => alert('hello')
