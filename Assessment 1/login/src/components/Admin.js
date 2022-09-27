import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const [loggedIn,setLoggedIn] = useState(true);
    let navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(!token){
        setLoggedIn(false)
        if(!loggedIn){
            return navigate('/');
        }
    }

  return (
    <div>Admin Page</div>
  )
}

export default Admin