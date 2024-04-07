import React, { useEffect } from 'react'

const LogOut = () => {

    useEffect(() => {
        LogOutUser()
    }, [LogOutUser])

  return (
   window.alert("you have successfully logged out !")
  )
}

export default LogOut
