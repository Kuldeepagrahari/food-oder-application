import React, { useEffect } from 'react'
import { useAuth } from '../../context/auth-context'
const LogOut = () => {
    
    const {LogOutUser} = useAuth()
    
    useEffect(() => {
        LogOutUser()
    }, [LogOutUser])

  return (
   window.alert("you have successfully logged out !")
  )
}

export default LogOut
