
import React, { FC, ReactComponentElement, ReactNode } from 'react'
import styles from './list.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Prop5, Prop6, Prop7, Prop8, Prop10, Prop9 } from '../../../assets/images'
import { CiHeart, CiLocationOn } from 'react-icons/ci'
import { IoHeart } from 'react-icons/io5'

const NoProduct=()=>(
  <div>
    <p>No Properties found</p>
  </div>
)

function List({lists}){
  console.log(lists)

  function ListItem(){
    return (
      lists.map((prop)=>(
        <Link href={`/property/${prop.id}`}>
          <div className={styles["search--list"]}>
            <img src={prop.images[0].url} alt=''/>
            <div className={styles["prop--desc"]}>
              <div>
                <p className={styles["type"]}>{prop.name}</p>
                <div className={styles["type--location"]}>
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>
                  <p className={styles["location--name"]}>{prop.city}</p>
                </div>
              </div>
              <div className={styles['heart--icon']}>
                <CiHeart fill='red' fontSize={20}/>
              </div>
            </div>
          </div>
        </Link>
      ))
    )
  }

  return (
    <div className={styles['search--list--display']}>
      <p className={styles["search--list--title"]}>{lists.length*3} Results <span>in {'Adiss Ababa'}</span></p>
      <div className={styles["search--lists"]}>
        {
          lists.length==0?(
            <NoProduct/>
          ):(
            <>
              <ListItem/>
              <ListItem/>
              <ListItem/>
            </>
          )
        }

      </div>
    </div>
  )
}

export {List}