'use client'

import React, {useState} from 'react'
import '../../../pages/search/search.module.css'
import Select, {components} from 'react-select'
import {CiLocationOn} from 'react-icons/ci'
import RangeSlider from '../../../assets/slider'

const options = [
  { value: 'addis-ababa', label: 'Addis Ababa' },
  { value: 'oromia', label: 'Oromia' },
  { value: 'amhara', label: 'amhara' },
  { value: 'tigray', label: 'Tigray' },
  { value: 'snnr', label: 'SNNR' },
  { value: 'afar', label: 'Afar' },
  { value: 'somale', label: 'Somale' },
  { value: 'benshangul', label: 'Benshangul' },
  { value: 'gambela', label: 'Gambela' },
  { value: 'diredawa', label: 'Dire-dawa' },
  { value: 'harar', label: 'Harar' },
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
  const [value, setValue] = React.useState([2000, 8000]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  };

  return (
    <div className={styles['filter--wrapper']}>
      <h1>Filter</h1>
      <div className={styles['filters']}>
        <div className={styles["location"]}>
          <p className={styles["filter--header"]}>Location</p>
          <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder='Location'
              components={{Control}}
              
            />
        </div>

        <div className={styles["place--type"]}>
          <p className={styles["filter--header"]}>Type of Place</p>
          <div className={styles["place--filter"]}>
          <label className={styles["container"]}>
            <p className={styles["text"]}>All</p>
            <input type="checkbox"/>
            <span className={styles["checkmark"]}></span>
          </label>
          <label className={styles["container"]}>
            <p className={styles["text"]}>Building</p>
            <input type="checkbox"/>
            <span className={styles["checkmark"]}></span>
          </label>
          <label className={styles["container"]}>
            <p className={styles["text"]}>Office</p>
            <input type="checkbox"/>
            <span className={styles["checkmark"]}></span>
          </label>
          <label className={styles["container"]}>
            <p className={styles["text"]}>Appartment</p>
            <input type="checkbox"/>
            <span class={styles["checkmark"]}></span>
          </label>
          <label className={styles["container"]}>
            <p className={styles["text"]}>Shop</p>
            <input type="checkbox"/>
            <span className={styles["checkmark"]}></span>
          </label>
          <label className={styles["container"]}>
            <p className={styles["text"]}>House</p>
            <input type="checkbox"/>
            <span className={styles["checkmark"]}></span>
          </label>
          </div>
        </div>

        <div className={styles["price--range"]}>
          <p className={styles["filter--header"]}>Price Range</p>
          <RangeSlider value={value} setValue={setValue}/>
        </div>

        <div className={styles["size"]}>
          <p className={styles["filter--header"]}>Size</p>
          <div className={styles["min--max"]}>
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

        <div className={styles["features"]}>
          <p className={styles["filter--header"]}>Features</p>
          <div className={styles["place--filter"]}>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Ac & Heating</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Clubhouse</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Dishwaher</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Spa</p>
              <input type="checkbox"/>
              <span class={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Balcony</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Pool</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Fitness Center</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Valet Parking</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
          </div>
        </div>

        <div className={styles["style"]}>
          <p className={styles["filter--header"]}>Style</p>
          <div className={styles["place--filter"]}>
            <label className={styles["container"]}>
              <p className={styles["text"]}>A-Frame</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Dome</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Cottage</p>
              <input type="checkbox"/>
              <span className={styles["checkmark"]}></span>
            </label>
            <label className={styles["container"]}>
              <p className={styles["text"]}>Spanish</p>
              <input type="checkbox"/>
              <span class={styles["checkmark"]}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

