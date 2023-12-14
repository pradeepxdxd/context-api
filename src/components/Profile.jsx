import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContext)
  return (
    <>
        <h1>Profile : {user ? user?.username:'User Not Logged In'}</h1>
    </>
  )
}
