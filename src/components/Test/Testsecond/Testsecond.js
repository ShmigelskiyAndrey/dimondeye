import React from 'react'
import Imgtext from '../../Imgtext/Imgtext'
import styels from './Testsecond.module.css'

export default function Testsecond() {
  return (
    <div className={styels.content}>

      <h1>ОБ ОСМОТРЕ</h1>

      <Imgtext path={'/images/Test/textsecond.png'}>
          <p>Это занимает около 30 минут, абсолютно бесплатно и доступно для всех старше 18 лет. Необходима предварительная запись.</p>
          <p>Вы получите рекомендацию наших специалистав и рецепт, который поможет выбрать нужные линзы в <span>DiamondEye</span></p>
      </Imgtext>

      <div className={styels.container}>
        <img src='/images/Test/testfirst.png' alt=''/>
        <div className={styels.first}>
          <p>Осмотр проводится на современном и красивом медицинском оборудовании Huvitz.</p>
          <img src='/images/Test/testsecond.png' alt=''/>
        </div>
      </div>

      <Imgtext path={'/images/Test/textfirst.png'}>
          <p>Проверка зрения — это диалог врача и пациента. Если у вас есть жалобы, неприятные ощущения или ситуации, когда вы чувствуете зрительный дискомфорт, обязательно расскажите об этом нашему специалисту.</p>
          <p>Оптометрист подберет оптимальную очковую коррекцию, а также ответит на ваши вопросы и даст рекомендации по дополнительному обследованию при необходимости.</p>
      </Imgtext>
    </div>
  )
}
