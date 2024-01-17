import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const Registerpage = () => {
  const [username, setUsername]=useState("")
    const [number, setNumber]=useState("")
    const [password, setPassword]=useState("")
    const [cpassword, setCpassword]=useState("")
    const usenavigate=useNavigate()

    const getData=async(e)=>{
      e.preventDefault();
      if (validation()) {

      try
      {
          const responce=await axios.post("http://localhost:3001/users" , {username,number,password,cpassword});
          console.log("sucess" , responce.data);
          toast.success('Success')
          usenavigate('/home')
      }
      catch(error){
          console.error("fail" , error);
          toast.error('fail') 
      }
      // setPrint(true)
    }
  }
  const validation = () => {
    let result = true;

    if (username === '' || username === null) {
        result = false;
        toast.warning('please Enter Username');
    }
    
    if (number === '' || number === null) {
        result = false;
        toast.warning('please Enter Contact Number');
    }

    if (password === '' || password === null) {
        result = false;
        toast.warning('please Enter password');
    }

    return result;
};

  return (
    <>
    {/* <Navbar /> */}
        <div class="register">
    <h2>Create account</h2>
    <form onSubmit={getData}>
      <label for="name">Your name:</label>
      <input type="text" id="name" name="name" 
       value={username}
       onChange={(e)=>setUsername(e.target.value)}/>

      <label for="email">Number:</label>
      <input type="number" id="email" name="email"  
       value={number}
       onChange={(e)=>setNumber(e.target.value)}/>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password"  
       value={password}
       onChange={(e)=>setPassword(e.target.value)}/>

      <label for="confirmPassword">Re-enter password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword"  
      value={cpassword}
       onChange={(e)=>setCpassword(e.target.value)}
        />
      <button type="submit" value="Create your Amazon account">Create your Amazon account</button>
    </form>

    <p>Already have an account? <Link to="/">Sign in</Link></p>
  </div>
      
    
    </>
  )
}

export default Registerpage
