import styles from '../../pages/property/add/add.module.css'
import React from 'react'
import InputSelect from '../../assets/inputSelect'
import { Navigation  } from '../../assets/Navigation'

export const OwnerData = ({firstName, setFirstName,lastName, setLastName, email, setEmail, ownerType, setOwnerType, phone, setPhone, addLevel, setAddLevel}) => (
    <div className={styles['partition'] +' '+ styles['description--pane']} style={{width:'calc(100% - 300px)', flex:'unset', minWidth:'700px'}}>
      <h2>Owner Data</h2>
      <div className={styles['form']}>
        <div className={styles['price--and--duration--content']}>
          <div className={styles['rental--cost']}>
            <label htmlFor="unit--first--name" className={styles.label}>First Name</label>
            <input className={styles.input} type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} id='unit--first--name' placeholder='Eg. John'/>
          </div>
          <div className={styles['late--charge']}>
            <label htmlFor="unit--last--name" className={styles.label}>Last Name</label>
            <input className={styles.input} type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} id='unit--last--name' placeholder='Eg. Legend'/>
          </div>
        </div>
          <hr className={styles.hr}/>
          <div className={styles['unit--information']}>
            <label className={styles.label} htmlFor="owner--type">Ownership Type</label>
            <InputSelect id='owner--type' secondarySelect={ownerType} setSecondarySelect={setOwnerType} options={[{name:'Personal', value:'Personal'},{name:'Organization',value:'Organization'}]}/>
          </div>
          <div className={styles['unit--information']}>
            <label className={styles.label} htmlFor="email--input">email</label>
            <input className={styles.input} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id='email--input' placeholder='Eg. johnlegend@gmail.com'/>
          </div>
          <hr className={styles.hr}/>
          <div className={styles['unit--information']}>
            <label className={styles.label} htmlFor="phone--input">Phone Number</label>
            <input className={styles.input} type={'tel'} value={phone} onChange={(e)=>setPhone(e.target.value)} id='phone--input' placeholder='Eg. (+2519)-3121-3930'/>
          </div>
      </div>
      <hr className={styles.hr}/>
      <Navigation setAddLevel={setAddLevel} addLevel={addLevel}/>
    </div>
  )
