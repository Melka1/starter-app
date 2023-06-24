import React from 'react'
import Logo from '@/assets/logo';
import styles from './styles/footer.module.css'
import {Prop1, Prop2} from '@/assets/images';
import Image from 'next/image'

function Footer() {
  return (
    <div className={'section--padding '+ styles['footer']}>
      <div className={styles['footer--logo--container']}>
        <div className={styles['footer--logo']}>
          <Logo color='#2F234F' width={50} height={50} style={{display:'flex'}}/>
          <h1 className={styles['footer--logo--name']}>Logo<span>ipsum</span></h1>
        </div>
        <p className={styles['footer--logo--desc']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className={styles['footer--recent--props']}>
        <p className={styles['footer--recent--props--title']}>Properties</p>
        <div className={styles['footer--recent--props--item']}>
          <Image src={Prop1} alt='properties'/>
          <div className={styles['property--description']}>
            <p className={styles['address']}>2972 Westheimer Rd. Santa Ana, Illinois 85486.</p>
            <p className={styles['cost']}>$ 20,000</p>
          </div>
        </div>
        <div className={styles['footer--recent--props--item']}>
          <Image src={Prop2} alt='properties'/>
          <div className={styles['property--description']}>
            <p className={styles['address']}>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            <p className={styles['cost']}>$ 28,000</p>
          </div>
        </div>
      </div>

      <div className={styles['contact--info']}>
        <p className={styles['footer--recent--props--title']}>Contact Info</p>
        <p className={styles['address']}>
          2972 Westheimer Rd. Santa Ana, Illinois 85486.
        </p>
        <p className={styles['address']}><span>Phone:</span> (239) 555-0108</p>
        <p className={styles['address']}><span>Email:</span> abcd@domain.com</p>
        <p className={styles['address']}><span>Website:</span> abcd@domain.in</p>
      </div>
    </div>
  )
}

export default Footer;
