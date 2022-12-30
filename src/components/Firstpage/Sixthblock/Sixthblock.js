import React from 'react'
import Textblock from '../../Textblock/Textblock'
import styles from './Sixthblock.module.css'

export default function Sixthblock() {
  return (
    <Textblock title={"ПРОВЕРКА ЗРЕНИЯ"} btn={{title: 'Читать подробнее', className: styles.abc, link: '/test'}}>
            <p>Это занимает около 30 минут, абсолютно бесплатно и доступно для всех старше 18 лет.
             Необходима предварительная запись.</p>
            <p>Вы получите рекомендацию наших специалистав и рецепт, который поможет выбрать нужные линзы в DiamondEye</p>
    </Textblock>
  )
}
