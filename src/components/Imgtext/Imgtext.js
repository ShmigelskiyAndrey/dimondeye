import React from 'react'
import styels from './Imgtext.module.css'

export default function Imgtext({path, children}) {
  return (
    <div className={styels.container}>
      <img src={path} alt=''/>
      <div className={styels.text}>
        {children}
      </div>
    </div>
  )
}
