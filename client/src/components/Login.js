import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/authCalls'
import { loginAction } from '../redux/feature/authSlice'
import Button from './Button'
import Input from './Input'

const Login = () => {

  const [form, setForm] = useState({})

  const dispatch = useDispatch()
  const nav = useNavigate()

  const auth = useSelector(state => state.auth.value)

  const { user, isLoggedIn } = auth

  const onChange = (e) => {
    const { value, name } = e.target
    setForm({ ...form, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    login(form)
      .then(response => {
        const auth = response.data;
        dispatch(loginAction(auth))
        nav('/chat')
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  //TODO
  // useEffect(()=>{
  //   const form = {username:'emre',password:'P4ssword'}
  //   login(form)
  //     .then(response => {
  //       const auth = response.data;
  //       console.log('auth info: ' + auth.user.username);
  //       dispatch(loginAction(auth))
  //       nav('/chat')
  //     })
  //     .catch(error => {
  //       console.log(error.response.data)
  //     });
  //     console.log('logging you in');
  //     login(form);
  // })

  return (
    <div className='login'>
      <div className='login__box'>
        <form onSubmit={onSubmit}>
          <h2 className='heading-secondary u-mb-3'>LOGIN</h2>
          <Input className='u-mb-1' type='text' placeholder='Your username*' name='username' onChange={onChange} />
          <Input className='u-mb-3' placeholder='Your password*' type='password' name='password' onChange={onChange} />
          <Button className='btn--light btn--animated' text='login' />
        </form>
      </div>
    </div>
  )
}

export default Login