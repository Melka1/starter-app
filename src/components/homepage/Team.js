import Image from 'next/image'
import React from 'react'
import { Avatar1, Avatar2, Avatar3, Avatar4 } from '@/assets/images'
import {SlSocialTwitter, SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook} from 'react-icons/sl'
import styles from './styles/team.module.css'
import Link from 'next/link'

function Team() {
  return (
    <div className='section--padding'>
      <h1 className='heading1'>Meet Our Team</h1>
      <p className='subtitle center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <div className={styles['teams']}>
        <div className={styles['team--member']}>
          <Image src={Avatar1} alt='team members'/>
          <p className={styles['team--member--name']}>Kathryn Murphy</p>
          <p className={styles['team--member--title']}>Co-Founder</p>
          <div className={styles['socials']}>
            <Link href={'/'}>
              <SlSocialTwitter/>
            </Link>
            <Link href={'/'}>
              <SlSocialInstagram/>
            </Link>
            <Link href={'/'}>
              <SlSocialLinkedin/>
            </Link>
            <Link href={'/'}>
              <SlSocialFacebook/>
            </Link>
          </div>
        </div>

        <div className={styles['team--member']}>
          <Image src={Avatar2} alt='team members'/>
          <p className={styles['team--member--name']}>Brooklyn Simmons</p>
          <p className={styles['team--member--title']}>Founder</p>
          <div className={styles['socials']}>
            <Link href={'/'}>
              <SlSocialTwitter/>
            </Link>
            <Link href={'/'}>
              <SlSocialInstagram/>
            </Link>
            <Link href={'/'}>
              <SlSocialLinkedin/>
            </Link>
            <Link href={'/'}>
              <SlSocialFacebook/>
            </Link>
          </div>
        </div>

        <div className={styles['team--member']}>
          <Image src={Avatar3} alt='team members'/>
          <p className={styles['team--member--name']}>Floyd Miles</p>
          <p className={styles['team--member--title']}>Founder</p>
          <div className={styles['socials']}>
            <Link href={'/'}>
              <SlSocialTwitter/>
            </Link>
            <Link href={'/'}>
              <SlSocialInstagram/>
            </Link>
            <Link href={'/'}>
              <SlSocialLinkedin/>
            </Link>
            <Link href={'/'}>
              <SlSocialFacebook/>
            </Link>
          </div>
        </div>

        <div className={styles['team--member']}>
          <Image src={Avatar4} alt='team members'/>
          <p className={styles['team--member--name']}>Ronald Richards</p>
          <p className={styles['team--member--title']}>Co-Founder</p>
          <div className={styles['socials']}>
            <Link href={'/'}>
              <SlSocialTwitter/>
            </Link>
            <Link href={'/'}>
              <SlSocialInstagram/>
            </Link>
            <Link href={'/'}>
              <SlSocialLinkedin/>
            </Link>
            <Link href={'/'}>
              <SlSocialFacebook/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team