'use client'

import { CTA, Footer, NavBar } from '../../components/homepage'
import React, { useState } from 'react'
import Link from 'next/link'
// import Map from '../../assets/map'
import styles from './property.module.css'

import { IoBed, IoChevronDown, IoClose, IoEllipsisHorizontal, IoExpand, IoSearch, IoShare } from 'react-icons/io5'
import { BsArrowLeft, BsMessenger, BsPinMap, BsSearch, BsShare } from 'react-icons/bs'
import {BiBath, BiCar} from 'react-icons/bi'
import { MdBed } from 'react-icons/md'
import {SlLocationPin} from 'react-icons/sl'
import {AiOutlineHeart, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import Image from 'next/image'

import { Prop10, Prop5, Prop6, Prop7, Prop8, Prop9, Prop11, Prop12 } from '../../assets/images'
import dynamic from 'next/dynamic'
import { unstable_createStyleFunctionSx } from '@mui/system'

const Map = dynamic(()=>import('../../assets/map'),{
    ssr: false
})

const properties = [{
  type:'Apartment',
  area:60,
  bedRoomCount:3,
  id:1
},{
  type:'House',
  area:200,
  bedRoomCount:2,
  id:2
}]

// export async function getStaticPaths(){
//   console.log('hey')
  
//   return {
//     paths:properties.map(i=>({
//       params:{
//         id:i.id.toString()
//       }
//     })),
//     fallback:false
//   }
// }


export default function Page({}) {
  const [imageIndex, setImageIndex] = useState(0)
  const [translate, setTranslate] = useState(0)

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

  return (
    <>
    <div className={styles['property--landing--page']} style={{height:'100vh'}}>
      <NavBar/>
      <Map/>
      <div className={styles['landing--page']}>
        <div className={styles['left']}>
          <div className={styles['params']}>
            <div className={styles['param']}><p>Type: Apartment</p><button><IoClose/></button></div>
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
            <div className={styles['carousel']} style={{transform:`translateX(-${imageIndex*100}%)`}}>
              <Image src={Prop5} alt='property'/>
              <Image src={Prop6} alt='property'/>
              <Image src={Prop7} alt='property'/>
              <Image src={Prop8} alt='property'/>
              <Image src={Prop9} alt='property'/>
            </div>
            <div className={unstable_createStyleFunctionSx['image--navigator']}>
              <button onClick={()=>setImageIndex(0)}><span style={{opacity:`${imageIndex==0?'1':'0'}`}}></span></button>
              <button onClick={()=>setImageIndex(1)}><span style={{opacity:`${imageIndex==1?'1':'0'}`}}></span></button>
              <button onClick={()=>setImageIndex(2)}><span style={{opacity:`${imageIndex==2?'1':'0'}`}}></span></button>
              <button onClick={()=>setImageIndex(3)}><span style={{opacity:`${imageIndex==3?'1':'0'}`}}></span></button>
              <button onClick={()=>setImageIndex(4)}><span style={{opacity:`${imageIndex==4?'1':'0'}`}}></span></button>
            </div>
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
            <h4>Cosy apartment for rent</h4>
            <span className={styles['property--location']}><SlLocationPin/> <p>184 A route du la Larville, D6000 Nice</p></span>
            <div className={styles['property--stats']}>
              <span><MdBed/><p>2</p></span>
              <span><BiBath/><p>1</p></span>
              <span><BiCar/><p>1</p></span>
              <span><IoExpand/><p className={styles['area']}>60m</p></span>
            </div>
            <p className={styles['property--description--content']}>
              Located on the plateou central and close to all amenities, the location of this apartment on the first floor of  a downtown bulding will be ideal  for your... <Link href={'/'}>see details</Link>
            </p>

            <div className={styles['property--price']}>
              <p>Rental Price: </p>
              <p className={styles['cost']}>$80<span>/night</span></p>
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
    <div className={styles['other--properties']}>
        <div style={{transform:`translateX(-${translate}px)`}} className={styles['props']}>
            <Link className={styles['the--prop']} href={'/property/2'}>
            <Image src={Prop10} alt='other properties'/>
            <div className={styles['property--specs']}>
                <div className={styles['spec--container']}>
                <p className={styles['cost']}>$55<span>/night</span></p>
                <p className={styles['location']}>3517 W.Gray St. Utica</p>
                <div className={styles['features']}>
                    <span><MdBed/><p>2</p></span>
                    <span><BiBath/><p>1</p></span>
                    <span><IoExpand/><p className={styles['area']}>105m</p></span>
                </div>
                </div>
                <button className={styles['like']}><AiOutlineHeart/></button>
            </div>
            </Link>
            <Link className={styles['the--prop']} href={'/property/2'}>
            <Image src={Prop11} alt='other properties'/>
            <div className={styles['property--specs']}>
                <div className={styles['spec--container']}>
                <p className={styles['cost']}>$85<span>/night</span></p>
                <p className={styles['location']}>3517 W.Gray St. Utica</p>
                <div className={styles['features']}>
                    <span><MdBed/><p>2</p></span>
                    <span><BiBath/><p>1</p></span>
                    <span><IoExpand/><p className={styles['area']}>180m</p></span>
                </div>
                </div>
                <button className={styles['like']}><AiOutlineHeart/></button>
            </div>
            </Link>
            <Link className={styles['the--prop']} href={'/property/2'}>
            <Image src={Prop12} alt='other properties'/>
            <div className={styles['property--specs']}>
                <div className={styles['spec--container']}>
                <p className={styles['cost']}>$75<span>/night</span></p>
                <p className={styles['location']}>3517 W.Gray St. Utica</p>
                <div className={styles['features']}>
                    <span><MdBed/><p>2</p></span>
                    <span><BiBath/><p>1</p></span>
                    <span><IoExpand/><p className={styles['area']}>95m</p></span>
                </div>
                </div>
                <button className={styles['like']}><AiOutlineHeart/></button>
            </div>
            </Link>
            <Link className={styles['the--prop']} href={'/property/2'}>
            <Image src={Prop9} alt='other properties'/>
            <div className={styles['property--specs']}>
                <div className={styles['spec--container']}>
                <p className={styles['cost']}>$105<span>/night</span></p>
                <p className={styles['location']}>3517 W.Gray St. Utica</p>
                <div className={styles['features']}>
                    <span><MdBed/><p>2</p></span>
                    <span><BiBath/><p>1</p></span>
                    <span><IoExpand/><p className={styles['area']}>120m</p></span>
                </div>
                </div>
                <button className={styles['like']}><AiOutlineHeart/></button>
            </div>
            </Link>
            <Link className={styles['the--prop']} href={'/property/2'}>
            <Image src={Prop8} alt='other properties'/>
            <div className={styles['property--specs']}>
                <div className={styles['spec--container']}>
                <p className={styles['cost']}>$60<span>/night</span></p>
                <p className={styles['location']}>3517 W.Gray St. Utica</p>
                <div className={styles['features']}>
                    <span><MdBed/><p>2</p></span>
                    <span><BiBath/><p>1</p></span>
                    <span><IoExpand/><p className={styles['area']}>60m</p></span>
                </div>
                </div>
                <button className={styles['like']}><AiOutlineHeart/></button>
            </div>
            </Link>
            <Link className={styles['the--prop']} href={'/property/2'}>
            <Image src={Prop7} alt='other properties'/>
            <div className={styles['property--specs']}>
                <div className={styles['spec--container']}>
                <p className={styles['cost']}>$40<span>/night</span></p>
                <p className={styles['location']}>3517 W.Gray St. Utica</p>
                <div className={styles['features']}>
                    <span><MdBed/><p>2</p></span>
                    <span><BiBath/><p>1</p></span>
                    <span><IoExpand/><p className={styles['area']}>54m</p></span>
                </div>
                </div>
                <button className={styles['like']}><AiOutlineHeart/></button>
            </div>
            </Link>
        </div>
        <button onClick={handleScrollLeft} className={styles['scroll--left']}><AiOutlineLeft/></button>
        <button onClick={handleScrollRight} className={styles['scroll--right']}><AiOutlineRight/></button>
    </div>
    {/* <CTA/> */}
    <Footer />
    </>
  )
}
