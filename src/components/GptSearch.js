import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import language from './../utils/languageResource';

const GptSearch = () => {
  const currLanguage = useSelector(store => store.app?.language);
    const searchText = useRef(null);
    const handleSearchClick = ()=>{
        console.log(searchText.current.value);
    }
  return (
    <div className="">
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <div className="w-6/12 absolute place-items-center mt-[10%] mx-auto right-0 left-0">
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-12" >
        <input type="text" ref = {searchText}  placeholder = { language[currLanguage].searchTextPlaceHolder} className="p-2 mx-4 text-black col-span-9 rounded-lg"></input>
        <button className="p-2 mx-4 pl-4 text-black col-span-3 bg-blue-500 rounded-lg" onClick={handleSearchClick}>{language[currLanguage].search}</button>
      </form>
      </div>
    </div>
  )
}

export default GptSearch
