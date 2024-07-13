import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  console.log(isSignInForm);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg'/>
        </div>
    <form className='w-1/4 h-3/4 bg-opacity-80 absolute p-12 bg-black my-32 mx-auto left-0 right-0 text-white '>
        <h1 className='text-2xl px-2 py-4'>{isSignInForm?"Sign in" :"Sign up"}</h1>
      
      {!isSignInForm &&  <input type='text' placeholder='Full Name' className='px-8 py-2 m-2 w-full bg-gray-600'/>}
      <input type='text' placeholder='Email Address' className='px-8 py-2 m-2 w-full bg-gray-600'/>
      
      <input type='password' placeholder='Password' className=' px-8 py-2 m-2 w-full bg-gray-600'/>
      
      <button className=' cursor-pointer px-8 py-2 m-2 w-full bg-red-700'>{isSignInForm?"Sign in" :"Sign up"}</button>
      <p onClick={toggleSignInForm} className=' cursor-pointer font-extralight m-4  w-full'>{isSignInForm?"New to Netflix? Sign Up now" :"Already Registered? Sign In"}</p>
    </form>
    </div>
  )
}

export default Login