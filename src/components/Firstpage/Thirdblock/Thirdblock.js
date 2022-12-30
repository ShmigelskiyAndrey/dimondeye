import React from 'react'
import styles from './Thirdblock.module.css'

export default function thirdblock() {
  return (
    <div className={styles.container}>
            <img className={styles.image} src='/images/first/thirdfirstimg.png' alt=''/>
            <img className={styles.image} src='/images/first/thirdsecondimg.png' alt=''/>
            <img className={styles.image} src='/images/first/thirdthirdimg.png' alt=''/>
            <img className={styles.image} src='/images/first/thirdfourthimg.png' alt=''/>
            <img className={styles.image} src='/images/first/thirdfifthimg.png' alt=''/>
    </div>
  )
}
