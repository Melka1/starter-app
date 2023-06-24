'use client'

import React, { useContext, useState } from 'react'
import { User } from '../../context/user'

function Provider({children}) {
  const [user, setUser] = useState({})
  return (
    <User.Provider value={[user, setUser]}>
      {children}
    </User.Provider>
  )
}

export default Provider