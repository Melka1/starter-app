'use client'

import React from 'react'
import styles from './styles/checkbox.module.css'
 
function Checkbox({title}) {

  return (
    <label className={styles["container"]}>
      <p className={styles["text"]}>{title}</p>
      <input type="checkbox"/>
      <span className={styles["checkmark"]}></span>
    </label>
  )
}

export default Checkbox

