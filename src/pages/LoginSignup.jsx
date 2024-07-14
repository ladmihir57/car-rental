import React from 'react'

import '../styles/LoginSignup.css'

const LoginSignup = () => {
  return (
    
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Login</h1>
            <div className="loginsignup-fields">
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
            </div>
            <button>login</button>
            <p className="loginsignup-login">Don't have an account? <span>Create</span></p>
            <div className="loginsignup-agree">
                <p>Forgot your password? <span>Reset it</span></p>
            </div>
        </div>
    </div>
    
  )
}

export default LoginSignup;