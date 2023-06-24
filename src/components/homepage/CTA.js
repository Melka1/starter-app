import React from 'react'
// import './styles/CTA.css'
import styles from './styles/cta.module.css'

function CTA() {
  return (
    <div id='cta' className={'section--padding '+ styles['cta--container']}>
      <div className={styles['cta']}>
        <h1 className={styles["cta--header"]}>Don&apos;t Miss A thing!</h1>
        <p className={styles['cta--subheader']}>Subscribe with Email and loads of interesting news will be sent to you on a daily basis.</p>
        <div className={styles['input--button']}>
          <input type='email' placeholder='Your email here'/>
          <button type='button'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default CTA