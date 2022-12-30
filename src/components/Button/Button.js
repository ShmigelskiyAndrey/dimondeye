import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({text, onClick, link, className = ""}) {

if(link){
  return(
  <Link to={link} onClick={onClick}>
    <button className={`${styles.button} ${className}`}>{text}</button>
  </Link>
  )
}

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>{text}</button>
  )
}
