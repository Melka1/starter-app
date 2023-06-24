import React from 'react'
import {MdOutlineNotificationImportant} from 'react-icons/md'
import {BsImage} from 'react-icons/bs'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className='welcome'>
        <h1>Welcome, Melka</h1>
        <p>Tue, 07 June 2022</p>
      </div>

      <div className='profile'>
        <div className='notification'>
          <MdOutlineNotificationImportant fontSize={16}/>
        </div>

        <div className='profile--pic'>
          <BsImage fontSize={16} />
        </div>
      </div>

    </div>
  )
}

export default Header