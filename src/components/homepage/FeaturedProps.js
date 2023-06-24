import React from 'react'
import styles from './styles/featured.module.css'
import { Image1, Image2, Image3, Image4, Image5 } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineArrowRight} from 'react-icons/ai'

function FeaturedProps() {
  return (
    <div className={styles['featured'] + ' section--padding'}>
      <p className={'heading1 center ' + styles.title}>Featured Properties</p>
      <p className='center subtitle'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <div className={styles['feature--container']}>
        <div className={styles.feature +" "+ styles.major}>
          <Image src={Image1} alt="featured photo"/>
          <div className={styles['feature--desc']}>
            <p className={styles.name}>New Propery</p>
            <p className={styles.desc}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className={styles.button}><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src={Image2} alt="featured photo"/>
          <div className={styles['feature--desc']}>
            <p className={styles.name}>New Propery</p>
            <p className={styles.desc}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className={styles.button}><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src={Image3} alt="featured photo"/>
          <div className={styles['feature--desc']}>
            <p className={styles.name}>New Propery</p>
            <p className={styles.desc}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className={styles.button}><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src={Image4} alt="featured photo"/>
          <div className={styles['feature--desc']}>
            <p className={styles.name}>New Propery</p>
            <p className={styles.desc}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className={styles.button}><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src={Image5} alt="featured photo"/>
          <div className={styles['feature--desc']}>
            <p className={styles.name}>New Propery</p>
            <p className={styles.desc}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className={styles.button}><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturedProps