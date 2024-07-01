import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {LOGO} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { toggleGptSearch } from '../utils/gptSlice';
import { setLanguage } from '../utils/appSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     // navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleItemSelect = (value)=>{
    console.log(value);
    dispatch(setLanguage(value));
  }
  const handleGptClick = ()=>{
    console.log('handle click');
    dispatch(toggleGptSearch());
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-t from-black-50 z-10 flex w-full justify-between">
      <img className="w-48" src={LOGO} alt="logo" />

      <div className="flex">
        <select
          className="px-2 rounded-lg my-4 bg-gray-500 mr-10"
          onChange={(e) => handleItemSelect(e.target.value) }
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <button
          className="bg-blue-900 px-2 my-4 rounded-lg"
          onClick={handleGptClick}
        >
          GPT Search
        </button>
        <button
          className="font-bold size-xl ml-16 text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header