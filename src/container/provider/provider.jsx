'use client'

import React, { useContext, useState } from 'react'
import { Properties } from '../../context/property'
import { User } from '../../context/user'

function Provider({children}) {
  const [user, setUser] = useState({})
  const [properties, setProperties] = useState([])
  return (
    <User.Provider value={[user, setUser]}>
      <Properties.Provider value={[properties, setProperties]}>
        {children}
      </Properties.Provider>
    </User.Provider>
  )
}

export default Provider