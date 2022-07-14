import React from "react";
import logo from '../logo.svg';


function Navbar(props){
    return (
      <>
          <nav className={props.darkMode ? "dark": ""}>
          <img src={logo} className="nav-img" alt="" />
          <h3 className="nav-head">ReactFacts</h3>
          <h4 className="title">React Project 1</h4>
          <div className="toggler">
              <p className="toggler--light">Light</p>
                <div className="toggler--slider"
                    onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
          </nav>
          </>
    )
  }

export default Navbar;