import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { netflixLogo } from "../utils/constants";
const Header = () => {



  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)
  const dispatch=useDispatch();  
  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
          
      })
      .catch((error) => {
          navigate("error")
      });
  };

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          navigate("/browse")
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/")
         

          
      }
    });
},[])
 
  return (
    <div className="absolute w-full px-5 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center p-14">
      <img
        className="w-40"
        src={netflixLogo}
        alt="Netflix Logo"
      />
  {
    user&&
      <div className="flex items-center">
        <button
          onClick={handleSignOut}
          className="font-extrabold text-red-700 mr-4"
        >
          <p className="m-0">Sign Out</p>
        </button>
        <img
          className="w-8 h-8 rounded-full"
          alt="userIcon"
          src={user.photoURL}
        />
      </div>
}
    </div>
  );
};

export default Header;
