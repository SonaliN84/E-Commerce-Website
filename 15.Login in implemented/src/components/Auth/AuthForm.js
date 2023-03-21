import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading]=useState(false)
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    
    setIsLoading(true)
    let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDy6mKVRsJ5oBpYPMGoS_Ec8FOLsZt5a08'
    }
  else{
    url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDy6mKVRsJ5oBpYPMGoS_Ec8FOLsZt5a08";
  }
    fetch(url,{
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      setIsLoading(false)
      if(res.ok){
      return res.json();
      }
      else{
        return res.json().then((data)=>{
          let errorMessage='Authentication failed';
          // if(data && data.error && data.error.message){
          //   errorMessage=data.error.message;
          // }
          
          throw new Error(errorMessage)
        })
      }
    }).then((data)=>{console.log(data)})
      .catch(err=>{alert(err.message)})
  }


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required
          />
        </div>
        
        <div className={classes.actions}>
        {!isLoading && <button >{isLogin ? 'Login' :'Create Account'}</button>}
        {isLoading && <p>Sending request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}


          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
