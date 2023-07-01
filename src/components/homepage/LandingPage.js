import React from 'react'
import styles from './styles/landing.module.css'
import {FiSearch} from 'react-icons/fi'
import Select from 'react-select';

import { options } from '@/data/locations';
import { propertyTypes } from '@/data/propertyTypes';


const roomCount = [
  {value:'', label:'Any'},
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '5+', label:'5+'}
];

function LandingPage({
    setLocation, setBedroomCount, setBathroomCount, setPropertyType,
    location, bedroomCount, bathroomCount, propertyType, handleFilter
  }) {

  const handleLocationChange=(selectedLocation)=>{
    console.log(selectedLocation)
    setLocation(selectedLocation)
  }

  const handlePropertyTypeChange=(selectedPropertyType)=>{
    if(selectedPropertyType === propertyTypes[0]){
      setPropertyType(null)
      return
    }
    console.log(selectedPropertyType)
    setPropertyType(selectedPropertyType)
  }
  
  const handleBedroomChange = (selectedBedroom) => {
    console.log(selectedBedroom)
    setBedroomCount(selectedBedroom)
  }

  const handleBathroomChange = (selectedBathroom) => {
    console.log(selectedBathroom)
    setBathroomCount(selectedBathroom)
  }

  return (
    <div className={styles.landing+' section--padding'}>
      <div className={styles.container}>
        <div style={{display:'flex', alignItems:'center'}}>
          <div className={styles.line}/>
          <p className={styles['sub-title']}>We are offering the</p>
        </div>
        <h2>best real estate deals</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button>More Details</button>
      </div>

      <div className={styles.search}>
        <div className={styles['search--title']}>
          <p>Find Your Home</p> 
          <FiSearch fontSize={18} color='#2F234F'/>
        </div>

        <div className={styles['search--type']}>
          <Select
            defaultValue={location}
            onChange={handleLocationChange}
            options={options}
            placeholder='Location'
            // styles={}
          />
          <Select
            defaultValue={propertyType}
            onChange={handlePropertyTypeChange}
            options={propertyTypes}
            placeholder='Property Type'
          />
          <Select
            defaultValue={bedroomCount}
            onChange={handleBedroomChange}
            options={roomCount}
            placeholder='Bedroom'
          />
          <Select
            defaultValue={bathroomCount}
            onChange={handleBathroomChange}
            options={roomCount}
            placeholder='Bathroom'
          />
          <button onClick={handleFilter}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage