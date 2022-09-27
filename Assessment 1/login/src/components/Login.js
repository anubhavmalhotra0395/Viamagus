import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'
import Amazon from '../images/amazon-logo.png'
import Tree from "../images/tree.png"
import Google from "../images/google.jpg"
import Facebook from "../images/facebook.png"

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loggedIn,setLoggedIn] = useState(false);
    const [error,setError] = useState('')
    const [errorMode,setErrormode] = useState(false)
    let navigate = useNavigate();

    const emailValidation = () => {
      if(!email){
         setErrormode(true)
         setError('The email field is required')
          return false
      }
      return true;
  }

    const submitForm= (e) => {
        e.preventDefault();
        if(emailValidation()){
        if(email === "test@gmail.com" && password ==="test123"){
          localStorage.setItem("token","12345678jhahsaaso")
          setLoggedIn(true);
          if(loggedIn){
            return navigate('/admin');
          }
        }
      }
    }
   
  return (
    <>
    <div className='hero-container'>
    </div>
    <div className='hero-inner'>
      
        <form onSubmit={(e) => submitForm(e)} className='hero-form'>
        
          <div className='form-header'>
              <img src={Amazon} style={{width:'220px'}}/>
          </div>
      
          <div className='form-inner-header'>
            <h4 className='form-inner-text'>Login</h4>
              <img src={Tree} style={{width:'150px'}}/>
          </div>
            <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-input'/><br/>
            {errorMode ? <span style={{color:'red',fontSize:'12px'}}><i class="fa-solid fa-circle-minus" style={{color:'red',fontSize:'12px'}}></i>{error}</span> : ''}
            <br/>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-input'/><br/>
            <input type='submit' value='Sign In' className='form-button' />
            <div className='form-after-text'>
                <p className='alignLeft'>Forgot password?</p>
                <p className='alignRight'>New User? Sign Up</p>
            </div>
                <p style={{textAlign:'center'}}>or</p>
            <div className='form-end-list'>
                <button type='submit' className='form-end-button'><img src={Google} style={{width:'28px',marginLeft:'-30px',marginRight:'30px',borderRadius:'5px'}}/>CONTINUE WITH GOOGLE</button>
                <button type='submit' className='form-end-button'><img src={Facebook} style={{width:'30px',marginLeft:'-10px',marginRight:'30px',borderRadius:'5px'}}/>CONTINUE WITH FACEBOOK</button>
            </div>
        </form>
     
      </div>

    </>
  )
}

export default Login