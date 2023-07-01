
import React from 'react'
import styles from './list.module.css'
import Link from 'next/link'
import { CiHeart, CiLocationOn } from 'react-icons/ci'
import { IoHeart } from 'react-icons/io5'
import { AiOutlineArrowsAlt, AiOutlineEllipsis } from 'react-icons/ai'
import { MdBed } from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { Property } from '@/container/Card/card'

const NoProduct=()=>(
  <div>
    <p style={{fontFamily:'var(--font-text)'}}>No Properties found</p>
  </div>
)

function List({lists}){
  console.log(lists)

  function ListItem(){
    return (
      lists.map((prop)=>(
        <Property
          key={prop.id}
          id={prop.id}
          name={prop.name}
          url={prop.images[0].url}
          // price={prop.price}
          // paymentType={prop.paymentType}
          city={prop.city}
          state={prop.state}
          bedroomCount={prop.bedroomCount}
          bathroomCount={prop.bathroomCount}
          area={prop.area}
        />
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