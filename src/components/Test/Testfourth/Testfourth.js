import React from 'react'
import Textblock from '../../Textblock/Textblock'
import styles from './Testfourth.module.css'

export default function Testfourth() {
  return (
    <Textblock title={"ВЫ ДОВЕРЯЕТЕ DiamondEye, А МЫ НАШИМ СПЕЦИАЛИСТАМ. "} 
    btn={{title: 'Записаться', link: '/order', className: styles.abc}}/>
  )
}
