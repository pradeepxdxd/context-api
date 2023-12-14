import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Login () {
  const [values, setValues] = useState({ username: '', password: '' })

  const { setUser } = useContext(UserContext)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setUser({ username: values.username, password: values.password })
  }

  console.log(values)
  return (
    <>
      <div>Login</div>
      <input
        type='text'
        placeholder='Username'
        name='username'
        id='1'
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        id='2'
        placeholder='Password'
        onChange={handleChange}
      />
      <input type='button' value='Submit' onClick={handleSubmit} />
    </>
  )
}
