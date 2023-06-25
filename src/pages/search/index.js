'use client'

import React, {useContext, useState} from 'react'
import axios from 'axios'
import styles from './search.module.css'
import SearchNavRar from '../../container/search/navbar/navbar'
import Header from '../../container/search/header/header'
import {Filter} from '../../container/search/filter/filter'
import {List} from '../../container/search/list/list'
import { User } from '@/context/user'


function Page({date}) {
  const [user, setUser] = useContext(User)
  
  const [location, setLocation] = useState({})//{value:'', label:''}
  const [price, setPrice] = useState({ min:6000, max:10000 })
  const [bedroomCount, setBedroomCount] = useState()
  const [bathroomCount, setBathroomCount] = useState()
  const [area, setArea] = useState({min:"", max:""})
  const [type, setType] = useState([])

  const [list, setList] = useState([])

  console.log({user, location, price, bathroomCount, bedroomCount, type, area})

  function handleFilter(){
    axios.post('/api/property', {
      data:{
        location:location.label,
        price,
        area,
        bedroomCount,
        bathroomCount,
      }
    })
    .then(data => {
      console.log(data.data)
      setList(data.data)
    })
    .catch(err => console.log(err))
  }
  return (
    <div className={styles.search}>
      <SearchNavRar/>

      <div className={styles['search--display']}>
       <Header date={date}/>

       <div className={styles['filter-and-list']}>
        <Filter 
          area={area} setArea={setArea} 
          price={price} setPrice={setPrice} 
          location={location} setLocation={setLocation} 
          bathroomCount={bathroomCount} setBathroomCount={setBathroomCount}
          bedroomCount={bedroomCount} setBedroomCount={setBedroomCount}
          type={type} setType={setType}
          handleFilter={handleFilter}
        />
        <List list={list}/>
       </div>
      </div>
    </div>
  )
}

export default Page

export async function getStaticProps(){
  let date = new Date().toString()
  console.log(date)
  return {
    props:{
      date
    }
  }
}