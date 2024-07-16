import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
 const dispatch=useDispatch()
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = (e) => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //sign in and sign up

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://media.licdn.com/dms/image/D4D35AQE_nICccCluPg/profile-framedphoto-shrink_100_100/0/1680527079167?e=1721728800&v=beta&t=tAb43QrFmQ2YCmroLoIGSj_UOh6_0ZBAffeokMVmxG0",
          })
            .then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid credentials");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-1/4 h-3/4 bg-opacity-80 absolute p-12 bg-black my-32 mx-auto left-0 right-0 text-white "
      >
        <h1 className="text-2xl px-2 py-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="px-8 py-2 m-2 w-full bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-8 py-2 m-2 w-full bg-gray-600"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" px-8 py-2 m-2 w-full bg-gray-600"
        />

        <button
          onClick={handleButtonClick}
          className=" cursor-pointer px-8 py-2 m-2 w-full bg-red-700"
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="text-red-700 font-bold">{errorMessage}</p>

        <p
          onClick={toggleSignInForm}
          className=" cursor-pointer font-extralight m-4  w-full"
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
