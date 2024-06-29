import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/userSlice";
import Header from "./Header";


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const appRoute = createBrowserRouter([
  //   { path: "/", element: <Login /> },
  //   { path: "browse", element: <Browse /> }
  // ]);
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
     // dispatch(removeUser());
      if (user) {
       dispatch(addUser({uid:user.uid,username:user.name}));
       navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe the event listener when unmount 
    return ()=> unsubscribe();

  },[]);

  return (
    <div>
      <Header/>
      {/* <p className="absolute z-20 pt-20 text-blue-900 font-bold">Body</p> */}
      <Outlet />
    </div>
  );
};

export default Body;
