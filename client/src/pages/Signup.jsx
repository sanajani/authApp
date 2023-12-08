// import React from 'react'
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text"
         placeholder="Username"
         id="username"
         className="bg-slate-100 p-2 rounded-lg outline-none border-2 md:text-xl border-gray-400"
          />

        <input type="email"
         placeholder="Email"
         id="email"
         className="bg-slate-100 p-2 rounded-lg outline-none border-2 md:text-xl border-gray-400"
          />

        <input type="password" 
         placeholder="Password"
         id="password"
         className="bg-slate-100 p-2 rounded-lg outline-none border-2 md:text-xl border-gray-400"
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