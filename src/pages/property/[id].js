'use client'

import { CTA, Footer, NavBar } from '../../components/homepage'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './property.module.css'

import { IoBed, IoChevronDown, IoClose, IoEllipsisHorizontal, IoExpand, IoSearch, IoShare } from 'react-icons/io5'
import { BsArrowLeft, BsMessenger, BsPinMap, BsSearch, BsShare } from 'react-icons/bs'
import {BiBath, BiCar} from 'react-icons/bi'
import { MdBed } from 'react-icons/md'
import {SlLocationPin} from 'react-icons/sl'
import {AiOutlineHeart, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import Image from 'next/image'

import dynamic from 'next/dynamic'
import Carousel from '@/assets/carousel'
import { User } from '@/context/user'
import { Properties } from '@/context/property'
import { Property } from '@/container/Card/card'

const Map = dynamic(()=>import('../../assets/map'),{
    ssr: false
})

let style = {
  link:{
    minWidth:'200px'
  }
}

export default function Page({data}) {
  const [user, setUser] = useContext(User)
  const [properties, setProperties] = useContext(Properties)
  const [otherImages, setOtherImages] = useState()

  const [imageIndex, setImageIndex] = useState(0)
  const [translate, setTranslate] = useState(0)
  console.log(data, user, properties)
  
  useEffect(()=>{
    const localImages = JSON.parse(localStorage.getItem('images'))
    const previewImages = properties.length!=0?properties:localImages
    console.log(localImages, properties, previewImages)
    setOtherImages(previewImages)
  },[])

  function handleScrollLeft(){
    if(translate==0)return
    if(translate<160){
      setTranslate(0)
    } else {
      setTranslate(prev=>prev-160)
    }
  }

  function handleScrollRight(){
    if(translate==532)return
    if(translate>372){
      setTranslate(532)
    } else {
      setTranslate(prev=>prev+160)
    }
  }

  const PropList =()=>(
    <>
      {otherImages.map((prop, index)=>{
        let border = data.id==prop.id?({borderColor:'rgb(9, 84, 108)'}):{}
        let conditionalStyle = {...style, link:{
          ...style.link, ...border
        }}
        return (
        <Property 
          key={prop.id} 
          id={prop.id}
          url={prop.images[0].url}
          name={prop.name}
          price={prop.price}
          paymentType={prop.paymentType}
          city={prop.city}
          state={prop.state}
          bedroomCount={prop.bedroomCount}
          bathroomCount={prop.bathroomCount}
          area={prop.area}
          style={conditionalStyle}
        />
      )})
      }
    </>
  ) 
  const images = data.images.map(image=>({content:image.url}))

  return (
    <>
    <div className={styles['property--landing--page']} style={{height:'100vh'}}>
      <NavBar/>
      <Map center={data.gps}/>
      <div className={styles['landing--page']}>
        <div className={styles['left']}>
          <div className={styles['params']}>
            <div className={styles['param']}><p>Type: {data.name}</p><button><IoClose/></button></div>
            <div className={styles['param']}><p>Price: $150-530</p><button><IoClose/></button></div>
            <div><p>Area</p> <IoChevronDown/></div>
            <div><p>Floor</p> <IoChevronDown/></div>
            <div><IoEllipsisHorizontal/></div>
          </div>

          <div className={styles['location--search']}>
            <BsSearch/>
            <input type='text' placeholder='Enter location here...'/>
            <button><IoClose/></button>
          </div>
        </div>

        <div className={styles['right']}>
          <div className={styles['product--images']}>
            <Carousel images={images}/>
            <div className={styles['top--content']}>
              <div><p>4.5</p></div>
              <button><AiOutlineHeart/></button>
            </div>
          </div>

          <div className={styles['product--description']}>
            <div className={styles['product--description--header']}>
              <p className={styles['title']}>Most Popular</p>
              <Link href={'/'}>
                <p className={styles['share']}>Share</p>
                <BsShare color={'lightgray'}/>
              </Link>
            </div>
            <h4>{data.name} for rent</h4>
            <span className={styles['property--location']}><SlLocationPin/> <p>{data.city+', '+data.state}</p></span>
            <div className={styles['property--stats']}>
              <span><MdBed/><p>{data.bedroomCount}</p></span>
              <span><BiBath/><p>{data.bathroomCount}</p></span>
              {/* <span><BiCar/><p>1</p></span> */}
              <span><IoExpand/><p className={styles['area']}>{data.area}m</p></span>
            </div>
            <p className={styles['property--description--content']}>
              Located on the plateou central and close to all amenities, the location of this apartment on the first floor of  a downtown bulding will be ideal  for your... <Link href={'/'}>see details</Link>
            </p>

            <div className={styles['property--price']}>
              <p>Rental Price: </p>
              <p className={styles['cost']}>${data.price}<span>/{data.paymentType}</span></p>
            </div>
            <div className={styles['controls']}>
              <button className={styles['contacts']}>Show contacts</button>
              <button className={styles['messages']}><BsMessenger/></button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    {/* <div className='property--details'></div> */}
    {otherImages&&<div className={styles['other--properties']}>
        <div onClick={handleScrollLeft} className={styles['scroll--left']}><AiOutlineLeft/></div>
        <div style={{transform:`translateX(-${translate}px)`}} className={styles['props']}>
            <PropList/>
            <PropList/>
            <PropList/>
        </div>
        <div onClick={handleScrollRight} className={styles['scroll--right']}><AiOutlineRight/></div>
    </div>}
    <Footer />
    </>
  )
}

export async function getStaticProps({params}){
  console.log(params, "prop")
  const res = await fetch(`http://localhost:3000/api/property?id=${params.id}`)
  const data = await res.json()
  console.log(data)
  return ({
    props:{data:data[0]}
  })

}

export async function getStaticPaths(props){
  const res = await fetch(`http://localhost:3000/api/property`,{
    method: "PUT",
  })
  const data = await res.json()
  return ({
    paths:data.map(id=>({
      params:{
        id
      }
    })),
    fallback:false
  })
}