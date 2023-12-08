// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

const Signup = () => {
  const [formData,setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signup',formData)
      // const res = await fetch("http://localhost:8080/api/auth/signup",{
      //   method: "POST",
      //   data: formData
      // })
      const data = res.data();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4">
        <input type="text"
         placeholder="Username"
         id="username"
         className="bg-slate-100 p-2 rounded-lg outline-none border-2 md:text-xl border-gray-400"
         onChange={handleChange}
          />

        <input type="email"
         placeholder="Email"
         id="email"
         className="bg-slate-100 p-2 rounded-lg outline-none border-2 md:text-xl border-gray-400"
         onChange={handleChange}
          />

        <input type="password" 
         placeholder="Password"
         id="password"
         className="bg-slate-100 p-2 rounded-lg outline-none border-2 md:text-xl border-gray-400"
         onChange={handleChange}
          />
          <button className="bg-slate-700 text-white py-3 rounded-lg uppercase font-semibold cursor-pointer hover:opacity-95 disabled:opacity-80" type="submit">Sign Up</button>
      </form>
      <div className="mt-4 flex gap-4 font-semibold">
        <p>Have an account?</p>
        <span className="text-blue-600  hover:text-blue-700"><Link to='/signin'>Sign in</Link></span>
      </div>
    </div>
  )
}

export default Signup