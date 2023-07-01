'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import {Team, Testimonial, FeaturedProps, Footer, NavBar, OurFeatures, LandingPage, CTA, RecentProps} from '@/components/homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [location, setLocation] = useState(null)
  const [propertyType, setPropertyType] = useState(null)
  const [bedroomCount, setBedroomCount] = useState(null)
  const [bathroomCount, setBathroomCount] = useState(null)

  function handleSearch(){
    console.log("Search is on the way")
  }
  return (
    <>
      <Head>
      <title>Logoipsum Real Estate</title>
        <meta name="description" content="A real estate agent devoted to its customers to provide quality and luxurius apartment and houses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
        <LandingPage
          location={location}
          setLocation={setLocation}  
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          bedroomCount={bedroomCount}
          setBedroomCount={setBedroomCount}
          bathroomCount={bathroomCount}
          setBathroomCount={setBathroomCount}
          handleSearch={handleSearch}
        />
        <FeaturedProps/>
        <OurFeatures/>
        <RecentProps/>
        <Team/>
        <Testimonial/>
        <CTA/>
        <Footer/>
      </main>
    </>
  )
}
