import React, {useState} from 'react'
import styles from './filter.module.css'
import Select, {components} from 'react-select'
import {CiLocationOn} from 'react-icons/ci'
import RangeSlider from '../../../assets/slider'
import {options} from '../../../data/locations'

const Control = ({ children, ...props }) => {
  
  return (
    <components.Control {...props}>
      <CiLocationOn style={{marginLeft:'10px'}} fontSize={16}/>
      {children}
    </components.Control>
  );
};

export function Filter({
  area, setArea, price, setPrice, location, setLocation, bathroomCount,setBathroomCount,
  bedroomCount, setBedroomCount, type, setType, handleFilter
}) {

  function handleLocationChange(selectedOption){
    console.log(selectedOption)
    setLocation(selectedOption)
  }

  function handleAreaChange({target}){
    console.log(target.name)
    setArea(prev=>({...prev,[target.name]:target.value}))
  }

  return (
    <div className={styles['filter--wrapper']}>
      <h1>Filter</h1>
      <div className={styles['filters']}>
        <div className={styles["location"]}>
          <p className={styles["filter--header"]}>Location</p>
          <Select
              defaultValue={options[0]}
              onChange={handleLocationChange}
              options={options}
              placeholder='Location'
              components={{Control}}
              styles={
                {
                  control: style=>({...style, fontFamily:'var(--font-text'}),
                  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                    return {
                      ...styles,
                      fontFamily: 'var(--font-text)',
                      fontSize:'14px',
                      backgroundColor:isSelected ? '#006845':isFocused ? '#0068458a':"white"
                    }
                  },
                  singleValue:(styles)=>({...styles, fontFamily: 'var(--font-text)', fontSize:'15px'}),
                  placeholder:(styles)=>({...styles, fontFamily: 'var(--font-text)', fontSize:'15px'}),

                }
              }
            />
        </div>

        <div className={styles["place--type"]}>
          <p className={styles["filter--header"]}>Type of Place</p>
          <div className={styles["place--filter"]} style={{gridTemplateColumns:'1fr'}}>
          {/* <label className={styles["container"]}>
            <p className={styles["text"]}>All</p>
            <input type="checkbox"/>
            <span className={styles["checkmark"]}></span>
          </label> */}
          <label className={styles["container"]}>
            <p className={styles["text"]}>Condominum</p>
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
            <span className={styles["checkmark"]}></span>
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
          <label className={styles["container"]}>
            <p className={styles["text"]}>Shared Compound</p>
            <input type="checkbox"/>
            <span className={styles["checkmark"]}></span>
          </label>
          </div>
        </div>

        <div className={styles["price--range"]}>
          <p className={styles["filter--header"]}>Price Range</p>
          <RangeSlider value={price} setValue={setPrice}/>
          <div className={styles["min--max"]} style={{marginTop:'20px'}}>
            <div>
              <p>{'$ '+price.min}</p><p>min</p>
            </div>
            <div>
              <p>{'$ '+price.max}</p><p>max</p>
            </div>
          </div>
        </div>

        <div className={styles["size"]}>
          <p className={styles["filter--header"]}>Area</p>
          <div className={styles["min--max"]}>
            <div>
              <input onChange={(e)=>handleAreaChange(e)} type="text" placeholder='Min' inputMode={'numeric'} name="min" id="min" />
              <p>sq m</p>
            </div>
            <div>
              <input onChange={(e)=>handleAreaChange(e)} type="text" placeholder='Max' inputMode={'numeric'} name="max" id="min" />
              <p>sq m</p>
            </div>
          </div>
        </div>
        
        <div className={styles["size"]}>
          <p className={styles["filter--header"]}>Rooms</p>
          <div className={styles["min--max"]}>
            <div>
              <input onChange={({target})=>setBedroomCount(target.value)} type="text" placeholder='No' inputMode={'numeric'} name="bedroom" id="bedroom" />
              <p>Bedroom</p>
            </div>
            <div>
              <input onChange={({target})=>setBathroomCount(target.value)} type="text" placeholder='No' inputMode={'numeric'} name="bathroom" id="bathroom" />
              <p>Bathroom</p>
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
              <span className={styles["checkmark"]}></span>
            </label>
          </div>
        </div>
      </div>
      <button onClick={handleFilter} className={styles["apply--filter"]}>Apply Filters</button>
    </div>
  )
}

