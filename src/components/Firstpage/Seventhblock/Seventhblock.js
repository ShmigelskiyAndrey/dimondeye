import React from "react";
import styles from "./Seventhblock.module.css";
import { Link } from "react-router-dom";

export default function Seventhblock() {
  return (
    <div className={styles.container}>
      <h1>СПЕКТОР УСЛУГ</h1>
      <div className={styles.content}>
        <div className={styles.first}>
          <div className={styles.firstleft}>
            <h3>Примерка на дому</h3>
            <img src="/images/first/sevenlast.png" alt="" />
          </div>
          <div className={styles.firstright}>
            <h6>
              Вы можете выбрать любые 4 пары, и мы доставимих вам в течение двух
              рабочих дней.
            </h6>
            <p>
              Вы оплачиваете только, что вам подошло. Доставка и возврат —
              бесплатно. Мы не будем брать с вас никакого депозита, даже если по
              итогам примерки вам ничего не понравится.
            </p>
            <img src="/images/first/seventhfirstimg.png" alt="" />
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.secondleft}>
            <h3>гарантия</h3>
            <h6>
              1 год гарантиии с момента покупки и бесплатное пожизненное
              обслуживание.
            </h6>
            <p>
              Мы ручаемся за качество очков, оправ и линз, которые вы
              приобретаете в DiamondEye, поэтому:
            </p>
            <p>
              Мы гарантируем прочность и надежность установки линз в оправу в
              течение шести месяцев с момента получения вами готовых очков;
            </p>
            <p>
              Все наши оправы и очки имеют гарантию один год с момента
              совершения покупки, за исключением случаев, когда производитель
              устанавливает свою пролонгированную гарантию на очки или оправу.
            </p>
          </div>
          <div className={styles.secondright}>
            <img src="/images/first/seventhsecondimg.png" alt="" />
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.thirdleft}>
            <h3> Проверка зрения</h3>
            <img src="/images/first/seventhfourthimg.png" alt="" />
          </div>
          <div className={styles.thirdright}>
            <h6>
              Беплатная проверка зрения и консультация с офтальмологом в наших
              салонах оптики.
            </h6>
            <p>
              Это занимает около 30 минут, абсолютно бесплатно и доступно для
              всех старше 18 лет. Необходима предварительная запись.
            </p>
            <p>
              Результаты исследования в виде рецепта мы выдаём на руки только
              при заказе линз в DiamondEye. В любом случае вы получаете устные
              рекомендации от оптометриста.
            </p>
            <Link to={"/test"} className={styles.link}>
              <button className={styles.button}>Читать подробнее</button>
            </Link>
          </div>
        </div>
        <div className={styles.fourth}>
          <div className={styles.fourthleft}>
            <h3> линзы</h3>
            <h6>
              До 7 рабочих дней после заказа по вашему рецепту мы установим лизы
              любой сложности.
            </h6>
            <p>
              Мы устанавливаем французские линзы Essilor, японские Hoya,
              немецкие Carl Zeiss. Срок изготовления очков составляет 5-7
              рабочих дней, но он может увеличиваться в праздники, а также если
              ваша коррекция требует рецептурных линз. В некоторых случаях для
              заказа линз нужно приезжать в магазин. Как правило, это касается
              «сложных» заказов, которые требуют персональной разметки. Если ваш
              заказ такой, мы свяжемся с вами дополнительно.
            </p>
          </div>
          <div className={styles.fourthright}>
            <img src="/images/first/sevenththirdimg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
