import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from '../components/_partials/Alert'
import '../App.css'

export function Signin () {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { signin, SigninWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signin(user.email, user.password)
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }
  const handleGoogleSignin = async () => {
    try {
      await SigninWithGoogle()
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }
  const handleResetPassword = async () => {
    if (!user.email) return setError('Please enter your email')
    try {
      await resetPassword(user.email)
      setError('We sent you an email with the link to reset your password')
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='img_bk'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='w-full max-w-xs m-auto'>
        <br />
        {error && <Alert message={error} />}
        <form onSubmit={handleSubmit} className='bg-white shadow-md px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-bold mg-2'>Email</label>
            <input type='email' name='email' placeholder='youremail@company.ltd' className='shadow appearance-none border rounder w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleChange} />
          </div>

          <div className='mb-4'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' placeholder='******' className='shadow appearance-none border rounder w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleChange} />
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign In</button>
            <a href='#!' className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' onClick={handleResetPassword}>Forgot Password?</a>
          </div>
          <p className='my-4 text-sm flex justify-between px-3 text-black'> Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </form>
        <button className='bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full' onClick={handleGoogleSignin}>Sign In with Google</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
