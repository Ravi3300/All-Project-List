import { useState } from 'react'
import './App.css'
import Otp from './Otp'

function App() {
  const otpLength = 6;
  return (
     <div>
      <h1>Enter Your OTP</h1>
      <Otp otpLength={otpLength}/>
     </div>
  )
}

export default App
