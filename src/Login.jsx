import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const[email , setemail] = useState()
    const[password , setpassword] = useState()
     const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login',{email,password})
        .then(result =>{
            console.log(result)
            if(result.data === "success"){
                navigate('/home')
            }
        })
        .catch(error => console.log(error))

    }



  return (
   
          <div className="d-flex justify-content-center align-items-center  ">
            <div className="bg-white  p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="email">email</label>
                    <input type="text"  name='email' placeholder='Enter Email' 
                    onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">password</label>
                    <input type="text"  name='password' placeholder='Enter Password'
                    onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-success w-100 '> Login</button>
               
            </form>
            </div>
           
          </div>

    
   


  )
}

export default Login