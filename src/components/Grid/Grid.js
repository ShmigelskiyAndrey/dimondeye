import React from 'react'
import styles from './Grid.module.css'

export default function grid({children, className = ""}) {
  return (
    <div className={`${styles.container} ${className}`}>
        {children}
    </div>
  )
}
