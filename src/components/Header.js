import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {



  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)
  const handleSignOut = () => {
  
    signOut(auth)
      .then(() => {
          navigate("/");
      })
      .catch((error) => {
          navigate("error")
      });
  };

  return (
    <div className="absolute w-full px-5 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center p-14">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
