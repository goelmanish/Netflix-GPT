import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>   
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-14 bg-black bg-opacity-70 w-3/12 my-40 mx-auto right-0 left-0 rounded-lg text-white">
        <h1 className="font-bold text-3xl pb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        { isSignIn ? "" : 
        <input type="text" placeholder="Full Name" className="py-3 p-2 mt-4  rounded-sm w-full bg-gray-600" />
        }
        <input type="text" placeholder="Email Address" className="py-3 p-2 mt-4  rounded-sm w-full bg-gray-600" />
        <input
          type="password"
          placeholder="Password"
          className="py-3 p-2 mt-4 rounded-sm w-full bg-gray-600"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-md">{isSignIn ? "Sign In" : "Sign Up"}</button>
      <p className="mt-6" onClick={toggleSignInForm}>New to NetFlix? <span className="font-bold underline">{isSignIn ? "Sign Up" : "Sign In" }</span></p>
      </form>
     
    </div>
  );
}

export default Login


