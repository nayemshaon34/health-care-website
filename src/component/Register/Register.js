import React, { useState } from 'react';
import { sendPasswordResetEmail,updateProfile,getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import { Link } from 'react-router-dom';

import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication()
const auth = getAuth();

const Register = () => {
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [pass,setPass] = useState('');
    const [error,setError] = useState('');
    const [isLogin,setIsLogin] = useState(false);

    const emailInputHandler = e =>{
        setMail(e.target.value);
      }
      const passInputHandler = e =>{
        setPass(e.target.value);
      }
    
      const toggleLogin = e =>{
        setIsLogin(e.target.checked);
      }
    
      const userNameHandler = e =>{
        setName(e.target.value);
      }


      const signInHandler = (e) =>{
        e.preventDefault();
         if(pass.length <6 ){
          setError('Password should be at least 6 characters');
           return;
         }
         if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
           setError('Password should contain two uppercase letters.');
           return;
         }
         console.log(mail,pass);
         isLogin?existedUser(mail,pass):newUser(mail,pass);
       }
      
       const verifyMail = () =>{
         sendEmailVerification(auth.currentUser)
         .then(()=>{
      
         });
       }
      
       const updateName = () =>{
        updateProfile(auth.currentUser, {
          displayName:name
        }).then((result) => {
          console.log(result.user);
        }).catch((error) => {
          setError('');
          // An error occurred
          // ...
        });
       }
       const resetMail = () =>{
        sendPasswordResetEmail(auth, mail)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          setError(error.message);
          // ..
        });
       }
      
       const existedUser = (mail,pass) =>{
        signInWithEmailAndPassword(auth, mail, pass)
        .then(result=>{
          console.log(result.user);
          setError('');
        })
        .catch(error=>{
          setError(error.message);
        })
       }
      
      
       const newUser = (mail,pass) =>{
        createUserWithEmailAndPassword(auth, mail, pass)
        .then((result) => {
          // Signed in 
          setError('');
          console.log(result.user);
          verifyMail();
          updateName();
      
          // ...
        })
        .catch((error) => {
          setError(error.message);
          // ..
        });
       }
  
    return (
        <div className="mx-5">
      <h1 className="text-primary mt-3 mb-4">{!isLogin?'Please Register':"Please Log In"}</h1>
      <form onSubmit={signInHandler}>
  { !isLogin && <div className="row mb-3">
    <label htmlFor="username" className="col-sm-2 col-form-label">UserName</label>
    <div className="col-sm-10">
      <input onBlur={userNameHandler} type="text" className="form-control" id="username"/>
    </div>
  </div>}
        
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={emailInputHandler} type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={passInputHandler} type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label  className="form-check-label" htmlFor="gridCheck1">
          Already Registered?
        </label>
      </div>
    </div>
  </div>
  <div className="text-danger mb-3">{error}</div>
  <button type="submit" className="btn btn-primary me-3">{!isLogin?'Register':'Log In'}</button>
  <button className="btn btn-primary" onClick={resetMail}>Reset Mail</button>
</form>
    </div>
    );
};

export default Register;