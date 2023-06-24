'use client'

import React, {useState, useRef, useContext, useEffect} from 'react'
// import {useSession} from 'next-auth/react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

import { OwnerData } from '../../../container/AddProperty/OwnerData'
import { NavBar } from '../../../components/homepage/NavBar'
import { AboutProperty } from '../../../container/AddProperty/Aboutproperty'

import {AiOutlineLeft, AiOutlineCheck, AiOutlineCloudUpload} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'
import styles from './add.module.css'
import { User } from '../../../context/user'

const LEVEL = [
  {
    title:"Owner Data"
  }, 
  {
    title:'About Properties'
  },
  {
    title:'Review'
  }
]

function Page() {
  const router = useRouter()
  const [user, setUser] = useContext(User)
  const [filesContent, setFilesContent] = useState([])
  console.log(user)
  if(!user)router.push('/login')

  const [addLevel, setAddLevel] = useState(1)
  //about the owner
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [ownerType, setOwnerType] = useState("Personal")
  //about the property
  const [name, setName] = useState("")
  const [images, setImages] = useState([])
  const [description, setDescription] = useState("")
  const [bathroom, setBathroom] = useState(0)
  const [bedroom, setBedroom] = useState(0)
  const [area, setArea] = useState(0)
  // //location information
  const [stateName, setStateName] = useState('')
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [unit, setUnit] = useState('')
  const [gps, setGPS] = useState({})
  // //price and duration
  const [duration, setDuration] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [rentalCost, setRentalCost] = useState(0)
  const [rentalCostType, setRentalCostType] = useState('Mon')
  const [lateCharge, setLateCharge] = useState(0)
  const [lateChargeType, setLateChargeType] = useState('Mon')
  // rules amd amenities
  const [rules, setRules] = useState([
    "Do not dmage the facilities",
    "Must pay bill on time",
    "It is forbidden to carry narcotic and alcohol"
  ])
  const [additionalFacilities, setAdditionalFacilities] = useState([
    "Squat toilet and wipes",
    "Laundry every week, max 10Kg",
    "A security guard is provided"
  ])

  const [addStatus, setAddStatus] = useState([true, true])
  
  const formData = new FormData();

  // const input1 = useRef("")
  // const input2 = useRef("")

  async function handleSaveDraft(){
    let userInfo = JSON.stringify({ firstName, lastName, email, phone, ownerType, 
      name, images, description, bathroom, bedroom, area,
      stateName, city, zipcode, unit,
      duration, downPayment, rentalCost, rentalCostType, lateCharge, lateChargeType,
      rules, additionalFacilities, 'status':'DRAFT', propertyId:user.id})

    formData.append("userInfo", userInfo)
    
    let selected = images.length
    
    while(selected>0){
      console.log("image"+selected)
      formData.append("myImage", images[selected-1]);
      selected--
    }

    console.log(formData.get('userInfo'), formData.get('myImage'))

    const { data } = await axios.post("/api/image", formData);
    console.log(data);
  }
  
  console.log("rerendered", addLevel, user, images)
  console.log(formData.get('userInfo'), formData.get('myImage'))

  return (
    <div style={{minHeight:'100vh'}}>
        <NavBar />
        <div style={{paddingTop:'4rem'}}>
          <div className={styles['navigation']}  style={{display:'flex', width:'100%', justifyContent:'space-between', padding:'1rem 5rem', background:'rgba(0,0,0,0.5)'}}>
            <div style={{display:'flex', alignItems:'center', gap:'1rem', fontFamily:'Inter'}}>
              <button 
                className={styles['back--button']}
                style={{width:'1.5rem', height:'1.5rem', borderRadius:'50%',border:'1px solid lightgray',background:'transparent',display:'flex',justifyContent:'center',alignItems:'center'}}
              >
                <AiOutlineLeft color={'white'} fontSize={'0.8rem'} />
              </button>
              <p className={styles['navigation--title']}>Add Property</p>
            </div>

            <div className={styles['progress']} style={{display:'flex'}}>
              <div>
                <div className={styles['navigation--number']} style={addLevel>=0?{background:"blue"}:{}}>
                  {
                    addLevel<=0?<p>1</p>:<AiOutlineCheck style={{color:'white'}}/>
                  }
                </div>
                <p>Owner Data</p>
                <BsChevronRight className={styles['arrow']} style={{color:'lightgray'}}/>
              </div>
              <div>
                <div className={styles['navigation--number']} style={addLevel>=1?{background:"blue"}:{}} >
                  {
                    addLevel<=1?<p>2</p>:<AiOutlineCheck style={{color:'white'}}/>
                  }
                </div>
                <p>About Properties</p>
                <BsChevronRight className={styles['arrow']} style={{color:'lightgray'}}/>
              </div>
              <div >
                <div className={styles['navigation--number']} style={addLevel>=2?{background:"blue"}:{}} >
                  {
                    addLevel<=2?<p>3</p>:<AiOutlineCheck style={{color:'white'}}/>
                  }
                </div>
                <p>Review</p>
                <BsChevronRight className={styles['arrow']} style={{color:'lightgray'}}/>
              </div>
            </div>

            <div className={styles['draft--control']}>
              <button>
                <AiOutlineCloudUpload />
                <p>Import</p>
              </button>
              <button onClick={handleSaveDraft}>
                <p>Save Draft</p>
              </button>
            </div>
          </div>
          <div className={styles['content']} style={{padding:'0 5rem', paddingBottom:'2rem'}}>
            {addLevel==0?
              <OwnerData 
                firstName={firstName} setFirstName={setFirstName} 
                ownerType={ownerType} setOwnerType={setOwnerType}
                lastName={lastName} setLastName={setLastName}
                email={email} setEmail={setEmail}
                phone={phone} setPhone={setPhone}
                setAddLevel={setAddLevel}
              />
              :addLevel==1?
              <AboutProperty
                name={name} setName={setName} images={images} setImages={setImages} area={area} setArea={setArea} bathroom={bathroom} 
                setBathroom={setBathroom} bedroom={bedroom} setBedroom={setBedroom} unit={unit} setUnit={setUnit} city={city} setCity={setCity} 
                stateName={stateName} setStateName={setStateName} zipcode={zipcode} setZipcode={setZipcode} rentalCost={rentalCost} 
                setRentalCost={setRentalCost} rentalCostType={rentalCostType} setRentalCostType={setRentalCostType} lateCharge={lateCharge} 
                setLateCharge={setLateCharge} lateChargeType={lateChargeType} setLateChargeType={setLateChargeType} duration={duration} setDuration={setDuration}
                downPayment={downPayment} setDownPayment={setDownPayment} rules={rules} setRules={setRules} addStatus={addStatus} setAddStatus={setAddStatus} 
                additionalFacilities={additionalFacilities} setAdditionalFacilities={setAdditionalFacilities} gps={gps} setGPS={setGPS}
                addLevel={addLevel} setAddLevel={setAddLevel} filesContent={filesContent} setFilesContent={setFilesContent}
              />
              :
              <></>
            }
          </div>
        </div>
    </div>
  )
}

export default Page
