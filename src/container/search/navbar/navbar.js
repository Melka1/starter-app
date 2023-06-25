import React from 'react'
import '../../../pages/search/search.module.css'
import Logo from '../../../assets/logo'
import { FiSearch } from 'react-icons/fi'
import {IoMdSettings} from 'react-icons/io'
import { IoGitCompareOutline ,IoLogOut} from 'react-icons/io5'
import {HiCurrencyDollar} from 'react-icons/hi'
import {GiSellCard, GiHouse} from 'react-icons/gi'
import Link from 'next/link'

function SearchNavRar() {
  return (
      <div className={styles['search--navbar']}>
        <div className={styles['navbar--logo']}>
          <Logo color='#2F234F' width={50} height={50} style={{display:'flex'}}/>
          <h1 className={styles['navbar--logo--name']}>Logo<span>ipsum</span></h1>
        </div>

        <div className={styles['navbar--input']}>
          <FiSearch fontSize={24} color='#ADA7A7'/>
          <input type='text' placeholder='Search'/>
        </div>

        <div className={styles['navbar--list']}>
          <h3 className={styles['navbar--list--title']}>Menu</h3>
          <ul>
            <li>
                <Link href={'/'}>
                  <HiCurrencyDollar color='green' fontSize={24}/>
                  <p className={styles['active']}>Buy</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <GiSellCard color='gray' fontSize={24}/> 
                <p>Sell</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <GiHouse color='gray' fontSize={24} />
                <p>Rent</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <IoGitCompareOutline color='gray' fontSize={24} />
                <p>Compare</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <IoMdSettings color='gray' fontSize={24}/>
                <p>Setting</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles['navbar--logout']}>
          {/* <button style={{background:'green'}}> */}
            <IoLogOut color='white' fontSize={24}/>
            <p>Logout</p>
          {/* </button> */}
        </div>
      </div>
  )
}

export default SearchNavRar