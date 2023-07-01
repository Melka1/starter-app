'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState, useContext } from 'react'
import {Team, Testimonial, FeaturedProps, Footer, NavBar, OurFeatures, LandingPage, CTA, RecentProps} from '@/components/homepage'
import { Properties } from '@/context/property'
import {useRouter} from 'next/navigation'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [properties, setProperties] = useContext(Properties)

  const [location, setLocation] = useState(null)
  const [propertyType, setPropertyType] = useState(null)
  const [bedroomCount, setBedroomCount] = useState(null)
  const [bathroomCount, setBathroomCount] = useState(null)
  const [price, setPrice] = useState({ min:6000, max:10000 })
  const [area, setArea] = useState({min:"", max:""})

  function handleFilter(){
    axios.post('/api/property', {
      data:{
        state:location.value,
        price:{
          min:price.min.toString(),
          max:price.max.toString()  
        },
        area,
        bedroomCount:bedroomCount.value,
        bathroomCount:bathroomCount.value
      }
    })
    .then(data => {
      // console.log(data)
      setProperties(data.data)
      localStorage.setItem('props', JSON.stringify(data.data))
      router.push('/search')
    })
    .catch(err => console.log(err))
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
          handleFilter={handleFilter}
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
