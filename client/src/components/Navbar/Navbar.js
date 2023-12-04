import React,{ useState} from 'react'
import notification from "../../assets/Notification.svg";
import navAvatar from "../../assets/navAvatar.png";
import arrowDown from "../../assets/arrowDown.svg";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


import "./styles.css";


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
    setUser(null);
  };

  return (
    <>
    <div className="navMain">
        <div className='header'>
            <h1>TASKS SCHEDULE</h1>
        </div>
      
      { user ? (
     <div className="navProfile">
        <img src={notification} className="notificationBell"/>

        <div className="navProfileDiv">
            <div className="navProfileAvatar">
              <img src={navAvatar}/>
            </div>
            <div className="navProfileText">
              <h3>Welcome back,</h3>
              <h2>{ user.result.name}</h2>
            </div>
            <img src={arrowDown} className="arrowDown"/>
        </div>
        <p ><strong className="logOut" onClick={logout}>Log Out</strong></p>
        </div>    
    ) : (
        <div className='buttSign'>
        <Button
       
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          </div>
    )}
        </div>
  
        
       
        </>
  )
}

export default Navbar