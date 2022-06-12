import React from "react";
import logo from '../logo.svg';


function Navbar(){
    return (
      <>
          <nav>
          <img src={logo} className="nav-img" alt="" />
          <h3 className="nav-head">ReactFacts</h3>
          <h4 className="title">React Project 1</h4>
          </nav>
          </>
    )
  }

export default Navbar;