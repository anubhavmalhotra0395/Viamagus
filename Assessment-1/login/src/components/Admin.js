import React,{useState} from 'react'

const Admin = () => {
    const [loggedIn,setLoggedIn] = useState(true);
    const token = localStorage.getItem("token");
    if(!token){
        setLoggedIn(false)
        if(!loggedIn){
          window.location.href = "/";
        }
    }

  return (
    <div>You are Logged In</div>
  )
}

export default Admin