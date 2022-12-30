import React from 'react'
import styles from './Testfirst.module.css'
import { Link } from 'react-router-dom'

export default function Testfirst() {
  return (
    <div className={styles.first}>
        <div>
            <img src='/images/Test/testlogo.png' alt=''/>
        </div>
        <Link to={'/order'} className={styles.link}><button>Записаться</button></Link>
    </div>
  )
}
