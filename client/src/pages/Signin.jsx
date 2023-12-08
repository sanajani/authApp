// import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const Signin = () => {
  const [formData,setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
    setError(null)
  }
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:8080/api/auth/signin',formData)
      const data = res.data;
      console.log(data);
      setLoading(false)
      setError(null)
      navigate('/')
    } catch (error) {
      console.log(error.response.data.message);
      setLoading(false)
      setError(error.response.data.message || "Something went wrong while Signin process")
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className={`text-3xl text-center font-semibold my-7`}>Sign In</h1>
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4">

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
          <button disabled={loading} className="bg-slate-700 text-white py-3 rounded-lg uppercase font-semibold cursor-pointer hover:opacity-95 disabled:opacity-80" type="submit">{!loading ? "Sign In" :'loading...'}</button>
      </form>
      <div className="mt-4 flex gap-4 font-semibold">
        <p>Dont Have an account?</p>
        <span className={`text-blue-600  hover:text-blue-700`}><Link to='/signup'>Sign Up</Link></span>
      </div>
      <div>
        <p className="text-red-500 font-semibold mt-5">{error}</p>
      </div>
    </div>
  )
}

export default Signin
