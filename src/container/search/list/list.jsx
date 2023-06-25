import React from 'react'
import styles from './list.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Prop5, Prop6, Prop7, Prop8, Prop10, Prop9 } from '../../../assets/images'
import { CiHeart, CiLocationOn } from 'react-icons/ci'
import { IoHeart } from 'react-icons/io5'

function List() {
  return (
    <div className={styles['search--list--display']}>
      <p className={styles["search--list--title"]}>398 Results <span>in Scotland</span></p>
      <div className={styles["search--lists"]}>
        <Link href={'/property/1'}>
          <div className={styles["search--list"]}>
            <img src='/images/property/1687634365170_Prop10.jpg' alt=''/>
            <div className={styles["prop--desc"]}>
              <div>
                <p className={styles["type"]}>Modern</p>
                <div className={styles["type--location"]}>
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>
                  <p className={styles["location--name"]}>Scotland</p>
                </div>
              </div>
              <div className={styles['heart--icon']}>
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/2'}>
          <div className={styles["search--list"]}>
            <Image src={Prop6} alt=''/>
            <div className={styles["prop--desc"]}>
              <div>
                <p className={styles["type"]}>Modern</p>
                <div className={styles["type--location"]}>
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>
                  <p className={styles["location--name"]}>Scotland</p>
                </div>
              </div>
              <div className={styles["heart--icon"]}>
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/2'}>
          <div className={styles["search--list"]}>
            <Image src={Prop7} alt=''/>
            <div className={styles["prop--desc"]}>
              <div>
                <p className={styles["type"]}>Modern</p>
                <div className={styles["type--location"]}>
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>                  
                  <p className={styles["location--name"]}>Scotland</p>
                </div>
              </div>
              <div className={styles["heart--icon"]}>
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/2'}>
          <div className={styles["search--list"]}>
            <Image src={Prop8} alt=''/>
            <div className={styles["prop--desc"]}>
              <div>
                <p className={styles["type"]}>Modern</p>
                <div className={styles["type--location"]}>
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>                  
                  <p className={styles["location--name"]}>Scotland</p>
                </div>
              </div>
              <div className={styles["heart--icon"]}>
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/2'}>
          <div className={styles["search--list"]}>
            <Image src={Prop9} alt=''/>
            <div className={styles["prop--desc"]}>
              <div>
                <p className={styles["type"]}>Modern</p>
                <div className={styles["type--location"]}>
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>                  
                  <p className={styles["location--name"]}>Scotland</p>
                </div>
              </div>
              <div className={styles["heart--icon"]}>
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/1'}>
          <div className={styles["search--list"]}>
            <Image src={Prop10} alt=''/>
            <div className={styles["prop--desc"]}>
              <div>
                <p className={styles["type"]}>Modern</p>
                <div className={styles["type--location"]}>
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>                  
                  <p className={styles["location--name"]}>Scotland</p>
                </div>
              </div>
              <div className={styles["heart--icon"]}>
                <IoHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export {List}