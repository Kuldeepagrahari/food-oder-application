import React, { useState } from 'react'
import "./signIn.css"
import { assets } from '../assets/assets'
const SignIn = ({setshowLogin}) => {

  const [currState, setCurrState] = useState("Login")

  return (


    <div className="login-page">
    <form className='login'>
        <div className="login-r1">
        <h2>{currState}</h2>
        <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-r2">
        {currState === "Login" ? <></> : <input type="text" placeholder='Your name'/>}
            <input type="text" placeholder='Your email'/>
            <input type="text" placeholder='Password' />
            <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        </div>
        <div className="login-r3">
       
       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> By continuing, I agree to the terms of use & privacy policy</label>
       </div>

        {currState==="Login"? <div className="login-r4">
        <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}className='click-here'>Click-here</span> </p>
     </div> :  <div className="login-r4">
        <p>Already have an account? <span onClick={()=>setCurrState("Login")}className='click-here'>Login-here</span> </p>
     </div> }
    

    
    </form>
    </div>
  )
}

export default SignIn
