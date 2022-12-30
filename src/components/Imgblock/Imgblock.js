import React from 'react'
import styles from './Imgblock.module.css'

export default function Imgblock({title, children}) {
  return (
    <div className={styles.imageblock}>
            <p>{title}</p>
            <div className={styles.container}>
                {children}
            </div>
    </div>
  )
}
