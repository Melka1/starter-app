'use client'

import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import styles from './search.module.css'
import SearchNavRar from '../../container/search/navbar/navbar'
import Header from '../../container/search/header/header'
import {Filter} from '../../container/search/filter/filter'
import {List} from '../../container/search/list/list'
import { User } from '@/context/user'
import { Properties } from '@/context/property'


function Page({date}) {
  const [user, setUser] = useContext(User)
  const [properties, setProperties] = useContext(Properties)
  
  const [location, setLocation] = useState({})//{value:'', label:''}
  const [price, setPrice] = useState({ min:6000, max:10000 })
  const [bedroomCount, setBedroomCount] = useState()
  const [bathroomCount, setBathroomCount] = useState()
  const [area, setArea] = useState({min:"", max:""})
  const [type, setType] = useState([])

  const [list, setList] = useState([])

  // console.log({user, location, price, bathroomCount, bedroomCount, type, area})

  function handleFilter(){
    axios.post('/api/property', {
      data:{
        location:location.value,
        price:{
          min:price.min.toString(),
          max:price.max.toString()  
        },
        area,
        bedroomCount,
        bathroomCount,
      }
    })
    .then(data => {
      // console.log(data)
      setList(data.data)
      setProperties(data.data)
      localStorage.setItem('props', JSON.stringify(data.data))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    let localProps = JSON.parse(localStorage.getItem('props'))
    let propList = properties.length!=0? properties:localProps
    setList(propList)
  },[])

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
        <List lists={list} user={user} />
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