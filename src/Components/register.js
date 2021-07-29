import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Register=()=>{
    const[data,setData]=useState({company_name:"",company_gst_no:"",company_email:""})

    const dataChange=(e)=>{
    
        setData(
          {...data,[e.target.name]: e.target.value,
        });
      }
      const header = {
        'Client-Service':'t2ot',
        'Auth-Key':'123',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      };
     
      const verify=()=>{
        console.log(data);
        axios.post('http://localhost/api/auth/singup', data, header)
        .then(response => {
          console.log("Status: ", response.status);
          console.log("Data: ", response.data);
        }).catch(error => {
          console.error('Something went wrong!', error);
        });
        }

        
     
    return(
            

        <div className="mb-3 row col-3">
              
                <div class="mb-3">
                <div class="mb-3">
                  <label  class="form-label">Company Name</label>
                  <input type="text" class="form-control"  aria-describedby="emailHelp"
                    value={data.cname} name="company_name" onChange={dataChange}
                  />
                  
                </div>
                  <label  class="form-label">GST NO</label>
                  <input type="text" class="form-control"  aria-describedby="emailHelp"
                  value={data.gst} name="company_gst_no" onChange={dataChange}
                  />
                  
                </div>
                <div class="mb-3">
                  <label  class="form-label">Email</label>
                  <input type="text" class="form-control" 
                  value={data.id} name="company_email" onChange={dataChange}
                  />
                </div>
          
                <button type="submit" class="btn btn-primary"  onClick={verify}>Submit</button>
            
        </div>
    )
}
export default Register;