import  { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets';
const Login = ({setshowlogin}) => {

    const [current_state,setcurrent_state]=useState("Login");

  return (
    <div className='loginpopup'>
     <form action=""className='login-pop-up-container'>
        <div className="login-popup-tittle">
            <h2>{current_state}</h2>
            <img onClick={()=>setshowlogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
        {current_state==="Login"?<></>:  <input type="text" name="" id="" placeholder='Your Name' required/>}
          
            <input type="email"  placeholder='Your email' required/>
            <input type="password" placeholder='Your password'required />
           
        </div>
         <button>{current_state==="sign up"?"Create account":"Login"}</button>
         <div className="login-popup-condition">
            <input type="checkbox" name="" id="" required/>
            <p>By accepting I am agree in your term and Condition.</p>
         </div>
         {
            current_state==="Login"?<p>
            Creat a New Account? <span  onClick={()=>setcurrent_state("sign up")}>Click Here</span>

         </p>: <p>Already  Have an account ? <span onClick={()=>setcurrent_state("Login")}> Login here</span></p>
         }
         
        
     </form>
    </div>
  )
}

export default Login
