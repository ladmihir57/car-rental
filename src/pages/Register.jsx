import React from 'react'

import '../styles/register.css'


const register = () => {
  return (
    <div className='register'>
        <div className="register-container">
            <h1>Register</h1>
            <div className="register-fields">
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
            </div>
            <button>Create Account</button>
            <p className="register-login">Already have an account? <span>Login</span></p>
        </div>
    </div>
  );
};

export default register;