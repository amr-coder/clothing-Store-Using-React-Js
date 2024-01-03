import React from 'react'
import './CSS/loginSignup.css'
 const LoginSignup = () => {
  return (
    <div className='loginSignup'>
       <div className="container">
          <h1>Sign Up</h1>
          <div className="form">
              <input type="text" placeholder='Your Name' />
              <input type="email" placeholder='Your Email' />
              <input type="password" placeholder='Password'/>
          </div>
           <button>Continue</button>
           <p className="login">Already have an accont ? <span>Login</span></p>
           <div className="agree">
            <p>By continuing I aggree the the terms of privacy policy</p>    
           </div>
       </div>
    </div>
  )
}
export default LoginSignup