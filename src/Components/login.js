import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Login=()=>{
  const[login,setLogin]=useState({uname:"",pwd:""})
  const dataChange=(e)=>{
    
    setLogin(
      {...login,[e.target.name]: e.target.value,
    });
  }

  const handleSubmit=()=>{
    console.log(login);
    //axios.get(`localhost:3000/api?uname=${login.uname}&password=${login.pwdl}`)
   // .then((res)=>{

   // })
  
  }
    return(


        <div className="mb-3 row col-3">
            
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={login.uname} name="uname" onChange={dataChange}
                  />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"
                  value={login.pwd} name="pwd" onChange={dataChange}
                  />
                </div>
          
                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Login</button>
           
        </div>
    )
}
export default Login;