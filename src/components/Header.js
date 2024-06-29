import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {LOGO} from '../utils/constants';
const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     // navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-t from-black-50 z-10 flex w-full justify-between">
      <img className="w-48" src={LOGO} alt="logo" />

      <div className="flex">
        <button
          className="font-bold size-xl text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header