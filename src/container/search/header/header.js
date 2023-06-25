import React from 'react'
import {MdOutlineNotificationImportant} from 'react-icons/md'
import {BsImage} from 'react-icons/bs'
import './header.module.css'

function Header() {
  return (
    <div className={styles['header']}>
      <div className={styles['welcome']}>
        <h1>Welcome, Melka</h1>
        <p>Tue, 07 June 2022</p>
      </div>

      <div className={styles['profile']}>
        <div className={styles['notification']}>
          <MdOutlineNotificationImportant fontSize={16}/>
        </div>

        <div className={styles['profile--pic']}>
          <BsImage fontSize={16} />
        </div>
      </div>

    </div>
  )
}

export default Header