import React,{useState,useEffect} from 'react';
 
 const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
    
 })

 export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token')
    const [token,setToken]=useState(initialToken);
    const [userIsLoggedIn,setUserIsLoggedIn]=useState(!!token);

    useEffect(()=>{
        setTimeout(()=>{
            localStorage.removeItem('token');
            // userIsLoggedIn=false;
            setUserIsLoggedIn(false)
            console.log(token)
          },1000*60*5)
    },[])

    // let userIsLoggedIn=!!token;
    const loginHandler=(token)=>{
      setToken(token);
      setUserIsLoggedIn(true)
      localStorage.setItem('token',token)
       setTimeout(()=>{
        localStorage.removeItem('token');
        setUserIsLoggedIn(false)
        console.log(token)
      },1000*60*5)
    }

    const logoutHandler=()=>{
        setToken(null);
        setUserIsLoggedIn(false)
        localStorage.removeItem('token')
    }

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
       
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
 }
 export default AuthContext;