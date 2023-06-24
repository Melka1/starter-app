import React from 'react'
import '../../../styles/list.css'
import Image from 'next/image'
import Link from 'next/link'
import { Prop5, Prop6, Prop7, Prop8, Prop10, Prop9 } from '@/app/assets/images'
import { CiHeart, CiLocationOn } from 'react-icons/ci'
import { IoHeart } from 'react-icons/io5'

function List() {
  return (
    <div className='search--list--display'>
      <p className="search--list--title">398 Results <span>in Scotland</span></p>
      <div className="search--lists">
        <Link href={'/property/1'}>
          <div className="search--list">
            <Image src={Prop5} alt=''/>
            <div className="prop--desc">
              <div>
                <p className="type">Modern</p>
                <div className="type--location">
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>
                  <p className="location--name">Scotland</p>
                </div>
              </div>
              <div  className='heart--icon'>
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/2'}>
          <div className="search--list">
            <Image src={Prop6} alt=''/>
            <div className="prop--desc">
              <div>
                <p className="type">Modern</p>
                <div className="type--location">
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>
                  <p className="location--name">Scotland</p>
                </div>
              </div>
              <div className="heart--icon">
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/2'}>
          <div className="search--list">
            <Image src={Prop7} alt=''/>
            <div className="prop--desc">
              <div>
                <p className="type">Modern</p>
                <div className="type--location">
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>                  
                  <p className="location--name">Scotland</p>
                </div>
              </div>
              <div className="heart--icon">
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/2'}>
          <div className="search--list">
            <Image src={Prop8} alt=''/>
            <div className="prop--desc">
              <div>
                <p className="type">Modern</p>
                <div className="type--location">
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>                  
                  <p className="location--name">Scotland</p>
                </div>
              </div>
              <div className="heart--icon">
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/2'}>
          <div className="search--list">
            <Image src={Prop9} alt=''/>
            <div className="prop--desc">
              <div>
                <p className="type">Modern</p>
                <div className="type--location">
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>                  
                  <p className="location--name">Scotland</p>
                </div>
              </div>
              <div className="heart--icon">
                <CiHeart fill='red' fontSize={25}/>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/property/1'}>
          <div className="search--list">
            <Image src={Prop10} alt=''/>
            <div className="prop--desc">
              <div>
                <p className="type">Modern</p>
                <div className="type--location">
                  <CiLocationOn color='rgba(0,0,0,0.5)' fontSize={16}/>                  
                  <p className="location--name">Scotland</p>
                </div>
              </div>
              <div className="heart--icon">
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