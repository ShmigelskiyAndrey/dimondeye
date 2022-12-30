import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
        <div className={`${styles.content} ${props.className}`}>
            <Link to={'/'} className={styles.link}>Главная</Link>
            <Link to={'/optika'} className={styles.link}>Оптика</Link>
            <Link to={'/sun'} className={styles.link}>Со<span>лнце</span></Link>
            <Link to={'/test'} className={styles.link}>Проверка зрения</Link>
        </div>
  )
}
