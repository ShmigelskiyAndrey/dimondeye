import React from 'react'
import Button from '../Button/Button'
import styles from './Textblock.module.css'

export default function Textblock({title, children, btn}) {
  return (
    <div className={styles.textblock}>
          <h1>{title}</h1>
          {children}
          {btn && <Button text={btn.title} onClick={btn.onClick} className={`${styles.button} ${btn.className}`} link={btn.link}/>}
    </div>
  )
}
