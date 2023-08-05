import React, { useState } from 'react'
import "./Login.css"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSclice';

const Login = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[profilePic, setProfilePic] = useState("");
  const dispatch=useDispatch();

  const loginToApp=(e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth)=>{
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoURL:userAuth.user.photoURL,
      }))
    }).catch((error)=>alert(error.message))
  }

  const register=() => {
    if (!name){
      return alert("Please enter full name");
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:profilePic
      })
      .then(()=>{
        dispatch(login({
          email:userAuth.user.email,
          uid: userAuth.user.uid,
          displayName:name,
          photoURL:profilePic
        }));
      })
    })
    .catch((error)=>alert(error.message));
    
  }

  return (
    <div className='login'>
      <img alt=""src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"></img>
      <form>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Full Name (required if registering)'/>
        <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)}type="text" placeholder='Profile picture URL'/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a Member?</p>
      <span className='login-register' onClick={register}>Register Now</span>
    </div>

  )
}

export default Login