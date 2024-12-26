import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
   
    const [name , setname] = useState()
    const [email ,setemail] = useState()
    const [password ,setpassword] = useState()
    const navigate = useNavigate()

    const [newname , setnewname] = useState()
    const [newemail , setnewemail] = useState()
    const [newpassword , setnewpassword] = useState()

    // console.log(name,email,password)

    // const empdetalis = {name,email,password}


    const handlesubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/register',{name,email,password})
        .then(result => {console.log(result)
         navigate('/login')
            
        })
        .catch(err => console.log(err))
        // setnewname(name)
        // setnewemail(email)
        // setnewpassword(password)
        // console.log(empdetalis)
        
    }

    // useEffect (() =>{
    //     console.log()

    // },[])




  return (
    <div className='d-flex justify-content-center align-items-center'>
    <div className="bg-white p-3 rounded w-25">
    <h2>Register</h2>

    <h2>Hello, {newname} , {newpassword} ,{newemail}</h2>
    <form onSubmit={handlesubmit}>
        <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id=""  placeholder='Enter your email' 
            onChange={(e) => setemail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='Enter Name'
            onChange={(e) => setname(e.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="password">password</label>
            <input type="text" name='password' placeholder='Password' 
            onChange={(e) => setpassword(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
        <p>Already Have an account ?</p>
       <button type='submit' className='btn btn-success w-100 rounded-0'>Submit </button>
    </form>
</div>
</div>
  )
}

export default Signup