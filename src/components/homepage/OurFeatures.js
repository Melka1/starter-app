import React from 'react'
import styles from './styles/our-features.module.css' 
import Image from 'next/image'
import {Cover} from '@/assets/images'

function OurFeatures() {
  return (
    <div className={styles['our-features'] + ' section--padding'}>
      <p className='heading1 left'>Our Features</p>
      <div className={styles['our--feature--container']}>
        <div className={styles['our--feature--list']}>
          <div className={styles['our--feature']}>
            <p className='heading2'>Living Inside a Nature</p>
            <p className={styles['our--feature--desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in.</p>
          </div>

          <div className={styles['our--feature']}>
            <p className='heading2'>Royal Touch Paint</p>
            <p className={styles['our--feature--desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in.</p>
          </div>

          <div className={styles['our--feature']}>
            <p className='heading2'>Luxurious Fittings</p>
            <p className={styles['our--feature--desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in.</p>
          </div>
        </div>

        <Image src={Cover} alt='our feature cover'/>

      </div>
    </div>
  )
}

export default OurFeatures