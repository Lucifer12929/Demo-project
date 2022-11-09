import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { withRouter } from "react-router-dom";
import { Input, Popover} from "antd";
// import {
//   RiArrowDropDownLine,
// } from "react-icons/all";
import { Link } from "react-router-dom";

import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";


import { useSelector, useDispatch } from "react-redux";
const Navbar = ({ match, history }) => {

  const auth = useSelector((state) => state.auth);
  const { user, isLogged, loading } = auth;
  

  


 
  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };
  const contentProfile = (
    <div className="Profilepobover">
      <Link to="/profile">Profile</Link> <br />
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
      <br />
    </div>
  );
  
  // search_icon.onclick=function(){
  //   search_box.classList.toggle("active");
  // }
  const userLink = () => {
    return (
      <Popover content={contentProfile} style={{ cursor: "pointer" }}>
        <Link to="/" className="avatar">
          <div className="dropdownic">
            {loading ? (
              <div className="loadingNav">
                <PropagateLoader color={"#1B78CA"} loading={loading} size={3} />
              </div>
            ) : (
              <>
                {" "}
                <img src={user.avatar} className="profile_pic" />
                {user.name} 
              </>
            )}
          </div>
        </Link>
      </Popover>
    );
  };
  
  // var input = document.getElementById("myInput");
  // input.addEventListener("keydown", function(event) {
  //     if (event.keyCode === 13) {
  //         handleSearch();
  //     }});

 
 
 
  return (
    <>
     
      <nav className="navbar">
        
        <div className="logo">
          <Link to="/" className="logo_t">
          <h1>Car Nation</h1>
          </Link>
        </div>
       
       
       
        
          <div className="Onright">
            {isLogged ? (
              <button className="Btn" id="SignInbtn">
              <div id="spin"></div>
              <Link to="/login" className="linkinbtn">
                {" "}
                Log Out
              </Link>
            </button>
            ) : (
              <button className="Btn" id="SignInbtn">
                <div id="spin"></div>
                <Link to="/login" className="linkinbtn">
                  {" "}
                  Log in
                </Link>
              </button>
            )}
         
          </div>
       
      </nav>
      
      
    </>
  );
};

export default withRouter(Navbar);
