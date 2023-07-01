import Link from 'next/link';
import styles from './card.module.css'
import { CiHeart, CiLocationOn } from 'react-icons/ci';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { MdBed } from 'react-icons/md';
import { BiBath } from 'react-icons/bi';

export const Property =({
  id, url, name, price, paymentType, city, state, bedroomCount, bathroomCount, area, style
})=>(
  <Link style={style?.link} className={styles['property--link']} href={`/property/${id}`}>
    <div className={styles["search--list"]}>
      <div className={styles['image--container']}>
        <div className={styles['heart--icon']}>
          <CiHeart fill='red' fontSize={20}/>
        </div>
        <img loading='lazy' src={url} alt=''/>
      </div>
      <div className={styles["prop--desc"]}>
        <div className={styles.locations}>
          {price&&<p className={styles["price"]}>$ {price}/<span>{paymentType}</span></p>}
          {name&&<p className={styles["type"]}>{name}</p>}
          <div className={styles["type--location"]}>
            <CiLocationOn color='rgba(0,0,0,0.75)' fontSize={16}/>
            <p className={styles["location--name"]}>{city}</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles["property--description--detail"]}>
          <div className={styles["area"]} >
              <AiOutlineArrowsAlt color='black' fontSize={16}/>
              <p>{area} <span>m</span></p>
          </div>
          <div className={styles["bedroom--counts"]}>
              <MdBed color='black' fontSize={16}/>
              <p>{bedroomCount}</p>
          </div>
          <div className={styles["bathroom--counts"]}>
              <BiBath color='black' fontSize={16}/>
              <p>{bathroomCount}</p>
          </div>
          {/* <div className={styles["details"]}>
              <AiOutlineEllipsis fontSize={16}/>
          </div> */}
        </div>
      </div>
    </div>
  </Link>

) 