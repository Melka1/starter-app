import { Navigation } from "../../assets/Navigation"
import InputSelect from "../../assets/inputSelect"
import Checkbox from "../../assets/checkbox"
import Imperative from '../../assets/aiImagePicker'
import Carousel from '../../assets/carousel'

import { priceType } from "../../data/dataTypes"
import styles from '../../pages/property/add/add.module.css'

import { AiOutlineHeart, AiOutlineArrowsAlt,AiOutlineEllipsis, AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
import { IoInformationCircleOutline ,IoLocationSharp} from 'react-icons/io5'
import { BiBath } from "react-icons/bi"
import { MdBed } from "react-icons/md" 
import dynamic from 'next/dynamic'

const Map = dynamic(()=>import('../../assets/map'), {
    ssr:false
})

// import Map from "../../assets/map"

export const AboutProperty = ({
    name, setName, images, setImages, area, setArea, bathroom, setBathroom, bedroom, setBedroom,
    unit, setUnit, city, setCity, stateName, setStateName, zipcode, setZipcode, gps, setGPS,
    rentalCost, setRentalCost, rentalCostType, setRentalCostType, lateCharge, setLateCharge, lateChargeType, setLateChargeType, duration, setDuration, downPayment, setDownPayment,
    rules, setRules, addStatus, setAddStatus, additionalFacilities, setAdditionalFacilities, addLevel, setAddLevel, filesContent, setFilesContent, formData, setFormData,
}) => {

    function handleAdd(id){
        let content = id==0?input1.current.value:input2.current.value
        console.log(content)
        id==0?
        setRules(prev=>[...prev, content])
        :setAdditionalFacilities(prev=>[...prev, content])
        handleAddButton(id)
    }

    function handleAddButton(id){
        let addContent = [...addStatus]
        console.log(addContent)
        addContent[id] = !addContent[id]
        console.log(addContent)
        setAddStatus(addContent)
    }

    return (
    <>
        <div className={styles.partition+' '+styles['description--pane']}>
            <h2>Add Property</h2>
            <div className={styles['form']}>
                <div className={styles["unit--information"]}>
                    <p className={styles['unit--information--title ']+' '+styles['section--title']}>Unit Information</p>
                    <div className={styles['unit--information--content']}>
                        <label htmlFor="unit--name" className={styles.label}>Unit name</label>
                        <input className={styles.input} value={name} onChange={(e)=>setName(e.target.value)} type="text" id='unit--name' placeholder='Enter the name of the property'/>
                        <label htmlFor="unit--images" className={styles.label}>Unit image</label>
                        <Imperative setImages={setImages} images={images} filesContent={filesContent} setFilesContent={setFilesContent} formData={formData}/>
                        <div className={styles['location--detail']}>
                            <div className={styles['unit--number']}>
                            <label htmlFor="unit--number" className={styles.label}>Area</label>
                            <input className={styles.input} value={area} type="number" inputMode={'numeric'} id='unit--number' onChange={({target})=>setArea(target.value)}/>
                            </div>
                            <div className={styles['unit--zipcode']}>
                            <label htmlFor="unit--zipcode" className={styles.label}>Bathroom</label>
                            <input className={styles.input} value={bathroom} type="number" inputMode={'numeric'} id='unit--zipcode' onChange={({target})=>setBathroom(target.value)}/>
                            </div>
                            <div className={styles['unit--state']}>
                                <label htmlFor="unit--state" className={styles.label}>Bedroom</label>
                                <input className={styles.input} value={bedroom} inputMode={'numeric'} onChange={({target})=>setBedroom(target.value)} type="number" id='unit--state'/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles['unit--location']}>
                    <p className={styles['unit--location--title section--title']}>Unit Location</p>
                    <div className={styles['unit--location--content']}>
                        <label htmlFor="location--name" className={styles.label}>Unit location name</label>
                        <input className={styles.input} value={city} onChange={(e)=>setCity(e.target.value)} type="text" id='location--name' placeholder='Enter the location of the property'/>
                        <div className={styles['location--detail']}>
                            <div className={styles['unit--number']}>
                                <label htmlFor="unit--number" className={styles.label}>Unit number</label>
                                <input className={styles.input} value={unit} onChange={({target})=>setUnit(target.value)} type="text" id='unit--number'/>
                            </div>
                            <div className={styles['unit--zipcode']}>
                                <label htmlFor="unit--zipcode" className={styles.label}>Zip code</label>
                                <input className={styles.input} value={zipcode} onChange={({target})=>setZipcode(target.value)} inputMode={'numeric'} type="number" id='unit--zipcode'/>
                            </div>
                            <div className={styles['unit--state']}>
                                <label htmlFor="unit--state" className={styles.label}>State</label>
                                <input className={styles.input} value={stateName} onChange={(e)=>setStateName(e.target.value)} type="text" id='unit--state'/>
                            </div>
                        </div>
                        <div className="unit--location--map" style={{width:'100%', aspectRatio:'16/6', marginTop:'1rem'}}>
                            <label htmlFor="map" className={styles.label}>Map <span className={styles.span}>(click the property's location)</span></label>
                            <div id="map" style={{width:'100%', height:'100%', marginTop:'0.5rem'}}>
                                <Map setGPS={setGPS} gps={gps}/>
                            </div>
                        </div>
                        {/* {gps location} */}
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles['price--and--duration']}>
                    <p className={styles['price--and--duration--title section--title']}>Price & Duration</p>
                    <div className={styles['price--and--duration--content']}>
                        <div className={styles['rental--cost']}>
                            <label htmlFor="rental--cost" className={styles.label}>Rental Costs</label>
                            <InputSelect 
                                price={true} 
                                primarySelect={rentalCost} 
                                setPrimarySelect={setRentalCost} 
                                secondarySelect={rentalCostType}  
                                setSecondarySelect={setRentalCostType} 
                                options={priceType}
                            />
                        </div>
                        <div className={styles['late--charge']}>
                            <label htmlFor="late--charge" className={styles.label}>Late Charge <span className={styles.gray}>(Optional)</span></label>
                            <InputSelect 
                                price={true} 
                                primarySelect={lateCharge} 
                                setPrimarySelect={setLateCharge}  
                                secondarySelect={lateChargeType}  
                                setSecondarySelect={setLateChargeType} 
                                options={priceType}
                            />
                        </div>
                        <div className={styles['rental--time']}>
                            <label htmlFor="rental--time" className={styles.label}>Minimum rental time</label>
                            <div className={styles['rental--time--container']}>
                                <p>Minimun duration <span>(in months)</span></p>
                                <div className={styles['control--container']}>
                                    <button onClick={()=>setDuration(prev=>prev-1)}><AiOutlineMinus/></button>
                                    <p>{duration}</p>
                                    <button onClick={()=>setDuration(prev=>prev+1)}><AiOutlinePlus/></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['minimum--down--payment']}>
                            <label htmlFor="minimum--down--payment" className={styles.label}>Minimum down payment <span className={styles.gray}>(Optional)</span></label>
                            <div id='minimum--down--payment' className={styles['minimum--down--payment--input']}>
                                <input className={styles.input} onChange={(e)=>setDownPayment(e.target.value)} value={downPayment} type="text"/>
                                <p>Percent %</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles["additional--information"]}>
                    <p className={styles['additional--information--title section--title']}>Additional Information</p>
                    <div className={styles['additional--information--content']}>
                        <div className={styles['additional--information--content--rules']}>
                            <label htmlFor="rules" className={styles.label}>Rules</label>
                            {
                            rules.map((rule, index)=>(
                                <Checkbox key={index} title={rule}/>
                            ))
                            }
                            {addStatus[0]?<button onClick={()=>handleAddButton(0)}  className={styles['add--rule--and--facility']}>
                            <AiOutlinePlus/>
                            <p>Add additional rules</p>
                            </button>:
                            <div className={styles['input--container']}>
                            <input className={styles.input} ref={input1} type='text' placeholder='Enter additional rule'/>
                            <div className={styles['input--controls']}>
                                <button onClick={()=>handleAdd(0)}>
                                <p>Add</p>
                                </button>
                                <button onClick={()=>handleAddButton(0)}>
                                <p>Cancel</p>
                                </button>
                            </div>
                            </div>}
                            <div style={{marginTop:'1rem', borderRadius:'0.5rem', border:'1px dashed white', display:'flex', width:'100%', justifyContent:'center'}}>
                                <Imperative style={{background:'transparent', border:'none', outline:'none'}}/>
                            </div>
                        </div>
                        <div className={styles['additional--information--content--facilities']}>
                            <label htmlFor="additional--facilities" className={styles.label}>Additional facilities</label>
                            {
                            additionalFacilities.map((facility, index) =>(
                                <Checkbox key={index} title={facility}/>
                            ))
                            }
                            {addStatus[1]?<button onClick={()=>handleAddButton(1)} className={styles['add--rule--and--facility']}>
                            <AiOutlinePlus/>
                            <p>Add additional facilities</p>
                            </button>:
                            <div className={styles['input--container']}>
                                <input className={styles.input} ref={input2} type='text' placeholder='Enter additional facility'/>
                                <div className={styles['input--controls']}>
                                    <button onClick={()=>handleAdd(1)}>
                                    <p>Add</p>
                                    </button>
                                    <button onClick={()=>handleAddButton(1)}>
                                    <p>Cancel</p>
                                    </button>
                                </div>
                            </div>}
                            <div style={{marginTop:'1rem', borderRadius:'0.5rem', border:'1px dashed white', display:'flex', width:'100%', justifyContent:'center'}}>
                                <Imperative style={{background:'transparent', border:'none', outline:'none'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <Navigation setAddLevel={setAddLevel} addLevel={addLevel}/>
            </div>
        </div>
        <div className={styles['partition']+' '+styles['preview--pane']}>
            <h2>Quick Preview</h2>
            <div className={styles['preview--container']}>
                <div className={styles['carousel--container']}>
                    {filesContent?.length>0?<Carousel images={filesContent}/>:(
                    <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <p>Your image goes here</p>
                    </div>
                    )}
                </div>
                <div className={styles['preview--content--container']}>
                    <div className={styles['price--and--like']}>
                    <p>${rentalCost?rentalCost:'550'}/<span style={{fontSize:'1rem'}}>{rentalCostType?rentalCostType:'Month'}</span></p>
                    <div className={styles['like--button']}>
                        <AiOutlineHeart fontSize='1rem' color='red'/>
                    </div>
                    </div>
                    <p className={styles["name"]}>{name?name:'Grand Citra Mansion'}</p>
                    <div className={styles["location--content"]}>
                    <IoLocationSharp color='white'/>
                    <p className={styles["location--name"]}>{city?city:'Surabaya'}, {stateName?stateName:'Indonesia'}</p>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles["property--description--detail"]}>
                        <div className={styles["area"]} >
                            <AiOutlineArrowsAlt color='white' fontSize={16}/>
                            <p>{area?area:'64'} <span>m</span></p>
                        </div>
                        <div className={styles["bedroom--counts"]}>
                            <MdBed color='white' fontSize={16}/>
                            <p>{bedroom?bedroom:'2'}</p>
                        </div>
                        <div className={styles["bathroom--counts"]}>
                            <BiBath color='white' fontSize={16}/>
                            <p>{bathroom?bathroom:'2'}</p>
                        </div>
                        <div className={styles["details"]}>
                            <AiOutlineEllipsis fontSize={16}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['preview--notification']}>
                <IoInformationCircleOutline fontSize={16}/>
                <p>This is the preview when your propery is published</p>
            </div>
        </div>
    </>
)}

