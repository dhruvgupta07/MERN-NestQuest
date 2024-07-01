import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const handleChange =(e)=>  {
   setFormData({

    ...formData,
    [e.target.id]:e.target.value
   });
  };
  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };
  console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input type="text" placeholder='Username' className='border p-2 rounded-lg' id='username' onChange={handleChange}/>
      <input type="email" placeholder='Email' className='border p-2 rounded-lg' id='email' onChange={handleChange}/>
      <input type="password" placeholder='Password' className='border p-2 rounded-lg' id='password' onChange={handleChange}/>
      <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>SIGN UP</button>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have aan account?</p>
      <Link to={'/sign-in'}>
    <span className='text-blue-700'>Sign-in</span>
    </Link>
    </div>
   </div>
    
  )
}
