import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignUpAction } from "../../Redux/Action/action";
import "./signup.css";

const Signup = () => {
  const [auth,setAuth] = useState({
    firstname : "",
    email : "",
    mobileNo : "",
    age : "",
    password : ""
  });
  const navigate = useNavigate();
  const [errror,setError] = useState(false);
  const [conPass,setConPass] = useState("");
  const dispatch = useDispatch();
  
  const {firstname,email,mobileNo,age,password} = auth;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  }
  const onSubmitFunction = async (e) => {
    e.preventDefault();
    try {
      if(firstname.length == 0 || email.length == 0 || mobileNo.length == 0 || age.length == 0 || password.length == 0 ){   
        setError(true)    
      }else{
        dispatch(SignUpAction(auth));
        navigate('/Signin')
      }
    } catch (error) {
      console.log("err..",error)
    }
  }
  return (
    <div className="signupMain">
      <h2 className="signup">Registration</h2>
      <form onSubmit={(e) => onSubmitFunction(e)}>
      <div className="childDiv">
        <label>FirstName</label>
        <input type="text" placeholder="Enter your FirstName" name="firstname" onChange={handleChange}/>
        <span>{errror && firstname.length <= 0 && "FirstName Can't Empty"}</span>
      </div>
      <div className="childDiv">
        <label>Email</label>
        <input type="text" placeholder="Enter your email" name="email" onChange={handleChange}/>
        <span>{errror && email.length <= 0 && "Email Can't Empty"}</span>
      </div>
      <div className="mobileAgeDiv">
        <label>Mobile No</label>
        <input type="text" className="mobileNo" placeholder="Enter Mobile No" name="mobileNo" onChange={handleChange}/>
        <label>Age</label>
        <input type="number" className="age" placeholder="Age" name="age" onChange={handleChange}/>
        
      </div>
      <span style={{color : "red"}}>{errror && age.length <= 0 && "MobileNo or Age Can't Empty"}</span>
      <div className="childDiv">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" name="password" onChange={handleChange}/>
        <span>{errror && password.length <= 0 && "password Can't Empty"}</span>
      </div>
      <div className="childDiv">
        <label>Confirm Password</label>
        <input type="password" placeholder="Enter your confirm password" onChange={(e) => setConPass(e.target.value)}/>
        <span>{errror && conPass.length <= 0 && "Confirm password can't empty"}</span>
        <span>{(conPass.length > 0 && password.length > 0) && (conPass !== password) && "password and Confirm password Not match"}</span>
        
      </div>
      <div className="childDiv">
        <button type="submit">Sign Up</button>
      </div>
      </form>
      <Link to="/Signin" className="linkTag">Already have an account? Login</Link>
    </div>
  );
};

export default Signup;
