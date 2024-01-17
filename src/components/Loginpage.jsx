import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Loginpage = () => {
  const [username ,setUsername]=useState("")
  const [password ,setPassword]=useState("")
  const apiUrl ="http://localhost:3001/users/"
  const  usenavigate = useNavigate()

  const getData = (e) => {
      e.preventDefault();
      if (validation()) {
      //     // console.log('proceed');
          fetch(apiUrl).then((res)=>res.json())
          .then((users) =>{
            const user =users.find((user)=> user.username === username);
            if(!user){
              toast.error('please Enter Valid username');
            }else{
              if(user.password ===password){
                  toast.success('Success')
                  usenavigate('/home')

              }else{
                  toast.error('please Enter Valid credentials');
              }
          }
          }).catch((err)=>{
              toast.error('Login Faild Due to :'+err.message );
          });
      }
  };
  const validation = () => {
      let result = true;

      if (username === '' || username === null) {
          result = false;
          toast.warning('please Enter Username');
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
    
    <div className='body'>
    <h2>Sign in</h2>
    <form onSubmit={getData}>
      <label for="email">Enter UserName:</label>
      <input type="text" id="name" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
    
      <button type="submit" value="Sign in" >Sign in</button>
    </form>
    <div className='text-2'>
    <p>Creat a Account <Link to="/register">Singhup</Link></p>
    </div>
  </div>
    </>
  )
}

export default Loginpage
