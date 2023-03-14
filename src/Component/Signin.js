import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { SignInAction } from '../Redux/Action/action';
import './Auth/signup.css';

const Signin = () => {
  const [auth,setAuth] = useState({
    email : "",
    password : ""
  });
  const navigate = useNavigate();
  const [errror,setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success,setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const {email,password} = auth;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  }

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    try {
      if(email.length == 0 || password.length == 0 ){   
        setError(true)    
      }else{
        dispatch(SignInAction(auth));
          setErrMsg(false)
          setSuccess(true);
          setSuccessMsg("Login SuccessFully")
          setTimeout(() => {
            navigate('/dashboard')
          },500)
        
      }
    } catch (error) {
      console.log("err..",error?.response?.data?.message)
      setError(true);
      setErrMsg(error?.response?.data?.message)
    }
  }

  return (
    <div className="signupMain">
      <h2 className="signup">Log in</h2>
      <form onSubmit={(e) => onSubmitFunction(e)}>
      <div className="childDiv">
        <label>Email</label>
        <input type="text" placeholder="Enter your email" onChange={handleChange} name="email"/>
        <span>{errror && email.length <= 0 && "Email Can't Empty"}</span>
      </div>
      <div className="childDiv">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" onChange={handleChange} name="password"/>
        <span>{errror && password.length <= 0 && "password Can't Empty"}</span>
      </div>
      {success && <span style={{color : "green"}}>{successMsg}</span>}
      {errror && <span style={{color : "red"}}>{errMsg}</span>}
      <div className="childDiv">
        <button type="submit">Sign Up</button>
      </div>
      </form>
      <Link to="/" className="linkTag">Don't have an account? Register</Link>
    </div>
  )
}

export default Signin