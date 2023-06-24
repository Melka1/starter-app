'use client'

import React, {useState} from 'react'
import styles from './styles/landing.module.css'
import {FiSearch} from 'react-icons/fi'
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  };

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
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder='Location'
          />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder='Category'
          />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder='Property Type'
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage