import React from 'react'
import Header from '../../Header/Header'
import styles from './Firstheader.module.css'

export default function Firstheader() {
  return (
    <Header className={styles.first}/>
    // <Header props={{className: styles.first}}/>
  )
}
