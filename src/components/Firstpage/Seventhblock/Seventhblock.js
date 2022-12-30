import React from 'react'
import styles from './Seventhblock.module.css'

export default function Seventhblock() {
  return (
    <div className={styles.content}>
          <h1>СПЕКТОР УСЛУГ</h1>
          <div className={styles.container}>
            <div className={styles.first}>
                <img src='/images/first/seventhfirstimg.png' alt=''/>
                <div className={styles.firsttext}>
                  <h3>Примерка на дому</h3>
                  <p>Вы можете выбрать любые 4 пары, и мы доставим их вам в течение двух рабочих дней.</p>
                </div>
            </div>
            <div className={styles.second}>
                <img src='/images/first/seventhsecondimg.png' alt=''/>
                <div  className={styles.secondtext}>
                  <h3>гарантия</h3>
                  <p>1 год гарантиии с момента покупки и бесплатное пожизненное обслуживание.</p>
                </div>
            </div>
            <div className={styles.third}>
                <img src='/images/first/sevenththirdimg.png' alt=''/>
                <div  className={styles.thirdtext}>
                  <h3>линзы</h3>
                  <p>До 7 рабочих дней после заказа по вашему рецепту мы установим лизы любой сложности. </p>
                </div>
            </div>
            <div className={styles.fourth}>
                <img src='/images/first/seventhfourthimg.png' alt=''/>
                <div  className={styles.fourthtext}>
                  <h3>Проверка зрения</h3>
                  <p>Беплатная проверка зрения и консультация с офтальмологом в наших  салонах оптики.</p>
                </div>
            </div>
          </div>
    </div>
  )
}
