'use client'

import React, {useState} from 'react'
import './filter.css'
import Select, {components} from 'react-select'
import {CiLocationOn} from 'react-icons/ci'
import RangeSlider from '@/app/assets/slider'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Control = ({ children, ...props }) => {
  
  return (
    <components.Control {...props}>
      <CiLocationOn style={{marginLeft:'10px'}} fontSize={16}/>
      {children}
    </components.Control>
  );
};

export function Filter() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = React.useState([500, 5000]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  };

  return (
    <div className='filter--wrapper'>
      <h1>Filter</h1>
      <div className='filters'>
        <div className="location">
          <p className="filter--header">Location</p>
          <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder='Location'
              components={{Control}}
            />
        </div>

        <div className="place--type">
          <p className="filter--header">Type of Place</p>
          <div className="place--filter">
          <label className="container">
            <p className="text">All</p>
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p className="text">Building</p>
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p className="text">Office</p>
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p className="text">Appartment</p>
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label className="container">
            <p className="text">Shop</p>
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p className="text">House</p>
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          </div>
        </div>

        <div className="price--range">
          <p className="filter--header">Price Range</p>
          <RangeSlider value={value} setValue={setValue}/>
        </div>

        <div className="size">
          <p className="filter--header">Size</p>
          <div className="min--max">
            <div>
              <input type="number" placeholder='Min' inputMode={'numeric'} name="min" id="min" />
              <p>sq m</p>
            </div>
            <div>
              <input type="number" placeholder='Max' inputMode={'numeric'} name="max" id="min" />
              <p>sq m</p>
            </div>
          </div>
        </div>

        <div className="features">
          <p className="filter--header">Features</p>
          <div className="place--filter">
            <label className="container">
              <p className="text">Ac & Heating</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Clubhouse</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Dishwaher</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Spa</p>
              <input type="checkbox"/>
              <span class="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Balcony</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Pool</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Fitness Center</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Valet Parking</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="style">
          <p className="filter--header">Style</p>
          <div className="place--filter">
            <label className="container">
              <p className="text">A-Frame</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Dome</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Cottage</p>
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p className="text">Spanish</p>
              <input type="checkbox"/>
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

