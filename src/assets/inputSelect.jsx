// 'use client'

// import React, {useState} from 'react'

function InputSelect({setPrimarySelect, primarySelect, secondarySelect, setSecondarySelect, options, price}) {
  // const [value, setValue] = useState(0)
  const styles = {
    container:{
      display: 'flex',
      gap: '0.5rem',
      border: '1px solid gray',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      alignItems: 'center',
      padding:'0 0.5rem'
    },
    input: {
      border: 'none',
      background: 'transparent',
      outline: 'none'
    },
    select: {
      border: 'none',
      background: 'transparent',
      outline:'none',
      width: `${!primarySelect?'100%':''}`,
      padding: `${!primarySelect?'0.5rem':''}`
    }, 
    option: {
      background: '#2d2e2e',
      padding:'0.5rem'
    },
    partition:{
      width: '1px',
      borderRight: '1px solid #8d7c7c',
      height: '1rem'
    }
  }

  return (
    <div style={styles.container}>
      {price&&<p>$</p>}
      {primarySelect!=null&&<input value={primarySelect} type="text" onChange={(e)=>setPrimarySelect(e.target.value)} style={styles.input}/>}
      {primarySelect!=null&&secondarySelect!=null&&<div className='partition' style={styles.partition}/>}
      {secondarySelect!=null&&<select value={secondarySelect} onChange={(e)=>setSecondarySelect(e.target.value)} style={styles.select}>
        {
          options?.map(option=>(
            <option key={option.value} style={styles.option} value={option.value}>{option.name}</option>
          ))          
        }
        
      </select>}
    </div>
  )
}

export default InputSelect


