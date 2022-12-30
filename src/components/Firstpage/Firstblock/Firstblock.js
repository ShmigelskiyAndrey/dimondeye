import React from 'react'
import styles from './Firstblock.module.css'
import { Link } from 'react-router-dom'

export default function firstblock() {
  return (
    <div className={styles.firstblock}>
        <p className={styles.logo}>DiamondEye</p>
        <p className={styles.title}>Посмотри на мир другими глазами</p>
        <Link to={'/optika'} className={styles.link}><button className={styles.button}>Заказать</button></Link>
    </div>
  )
}
