'use client'

import Image from 'next/image'
import React, {useRef, useState} from 'react'
import { Quote, Profile1, Profile2, Profile3 } from '@/assets/images'
import styles from './styles/testimonials.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

let style1={}, style2={}, style3={};

const style = {
  backgrounColor: '#7F57F1',
  transform: 'scale(1.5)' 
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1440 },
    items: 4,
    slidesToSlide:4
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
    slidesToSlide:3
  },
  tablet: {
    breakpoint: { max: 1023, min: 600 },
    items: 2,
    slidesToSlide:2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide:1
  }
};

function Testimonial() {

  
  return (
    <div id='testimonials' className='section--padding'>
      <h1 className='heading1'>our clients speak</h1>
      <p className='subtitle center'>We have been working with clients around the world</p>
     
      <Carousel 
        responsive={responsive}
        showDots={true}
        infinite
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div className={styles['comment']}>
          <div className={styles['comment--section']}>
            <Image src={Quote} alt='quote mark' />
            <p className={styles['comment--title']}>Professional Partner</p>
            <p className={styles['comment--content']+' center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
          </div>
          <Image src={Profile1} alt='profile pic'/>
          <p className={styles['comment--profile--name']}>Lorri Warf</p>
          <p className={styles['comment--profile--title']}>UX Designer</p>
        </div>
        <div className={styles['comment']}>
          <div className={styles['comment--section']}>
            <Image src={Quote} alt='quote mark' />
            <p className={styles['comment--title']}>Professional Partner</p>
            <p className={styles['comment--content']+' center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
          </div>
          <Image src={Profile2} alt='profile pic'/>
          <p className={styles['comment--profile--name']}>Lorri Warf</p>
          <p className={styles['comment--profile--title']}>UX Designer</p>
        </div>
        <div className={styles['comment']}>
          <div className={styles['comment--section']}>
            <Image src={Quote} alt='quote mark' />
            <p className={styles['comment--title']}>Professional Partner</p>
            <p className={styles['comment--content']+' center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
          </div>
          <Image src={Profile3} alt='profile pic'/>
          <p className={styles['comment--profile--name']}>Lorri Warf</p>
          <p className={styles['comment--profile--title']}>UX Designer</p>
        </div>
        <div className={styles['comment']}>
          <div className={styles['comment--section']}>
            <Image src={Quote} alt='quote mark' />
            <p className={styles['comment--title']}>Professional Partner</p>
            <p className={styles['comment--content']+' center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
          </div>
          <Image src={Profile1} alt='profile pic'/>
          <p className={styles['comment--profile--name']}>Lorri Warf</p>
          <p className={styles['comment--profile--title']}>UX Designer</p>
        </div>
        <div className={styles['comment']}>
          <div className={styles['comment--section']}>
            <Image src={Quote} alt='quote mark' />
            <p className={styles['comment--title']}>Professional Partner</p>
            <p className={styles['comment--content']+' center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
          </div>
          <Image src={Profile2} alt='profile pic'/>
          <p className={styles['comment--profile--name']}>Lorri Warf</p>
          <p className={styles['comment--profile--title']}>UX Designer</p>
        </div>
        <div className={styles['comment']}>
          <div className={styles['comment--section']}>
            <Image src={Quote} alt='quote mark' />
            <p className={styles['comment--title']}>Professional Partner</p>
            <p className={styles['comment--content']+' center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
          </div>
          <Image src={Profile3} alt='profile pic'/>
          <p className={styles['comment--profile--name']}>Lorri Warf</p>
          <p className={styles['comment--profile--title']}>UX Designer</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonial