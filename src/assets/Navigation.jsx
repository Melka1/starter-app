import styles from './styles/navigation.module.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Navigation = ({setAddLevel, addLevel}) =>(
    <div className={styles['add--navigation']}>
      <button className={styles['back']} onClick={()=>setAddLevel(prev=>prev-1)}>
        <AiOutlineArrowLeft fontSize={'1rem'}/>
        <p>Back</p>
      </button>
      <button className={styles['continue']} onClick={()=>setAddLevel(prev=>prev+1)}>
        <p>Continue</p>
      </button>
    </div> 
  )
