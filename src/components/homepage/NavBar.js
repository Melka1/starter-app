'use client'

import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/Vector.svg'
import styles from './styles/navbar.module.css'
import Link from 'next/link'
import {signIn, useSession, signOut} from 'next-auth/react'

export default function NavBar(){
  const session = useSession()
  console.log('navbar', session)
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} >
        <Image src={Logo} alt='logo' color='black' height={36.5} width={36.5}/>
        <h1>Logoipsum</h1>
      </div>

      <div className={styles.links} >
        <ul>
          <li><Link href={'/'}>Home</Link><div/></li>
          <li><Link href={'#testimonials'}>About</Link><div/></li>
          <li><Link href={'#recent--props'}>Property</Link><div/></li>
          <li><Link href={'/search'}>Search</Link><div/></li>
          <li><Link href={'#cta'}>Contact</Link><div/></li>
        </ul>
      </div>
      <div className={styles['user--control']}>
        {
        !session?.data?
          <>
            <button onClick={()=>signIn()}>Sign In</button>
            <button>Sign Up</button>
          </>:
          <>
            <p>{session.data?.user.name}</p>
            <button onClick={()=>signOut()}>Sign Out</button>
          </>}
      </div>
    </div>
  )
}