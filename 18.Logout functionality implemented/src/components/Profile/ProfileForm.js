import classes from './ProfileForm.module.css';
import { useRef,useContext} from 'react';
import AuthContext from '../../store/auth-context';
const ProfileForm = () => {
  const ctx=useContext(AuthContext)
  const newPasswordInputRef=useRef();
  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredNewPassword=newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDy6mKVRsJ5oBpYPMGoS_Ec8FOLsZt5a08',{
      method:'POST',
      body:JSON.stringify({
        idToken:ctx.token,
        password:enteredNewPassword,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
