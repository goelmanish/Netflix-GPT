import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const appRoute = createBrowserRouter([
  //   { path: "/", element: <Login /> },
  //   { path: "browse", element: <Browse /> }
  // ]);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged called...");
     // dispatch(removeUser());
      if (user) {
       const uid = user.uid;
       dispatch(addUser({uid:user.uid,username:user.name}));
       navigate("/browse");
       console.log("onAuthStateChanged SignIn...");
      } else {
        // User is signed out
        // ...
        console.log("onAuthStateChanged SignOut...");
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[]);

  return (
    <div>
      <p className="absolute z-20 pt-20 text-blue-900 font-bold">Body</p>
      <Outlet />
    </div>
  );
};

export default Body;
