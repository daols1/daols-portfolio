import React, { useState, useRef } from "react";
import "./Menu.css";
import Logo from "../../asset/Logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

function Menu() {
  // State logic

  const [nav, setNav] = useState(false);

  const widthChecker = useRef([window.innerWidth]).current[0] <= 650;

  const iconHandler = () => {
    setNav(!nav);
  };

  // Screen Logic

  return (
    <div className="main-menu-container container">
      <div>
        <img src={Logo} alt="" className="logo" />
      </div>
      {widthChecker === false ? (
        <>
          <div className="menu-itself">
            <ul className="unlisted">
              <Link to="/" onClick={iconHandler}>
                Home
              </Link>
              <Link to="#about" onClick={iconHandler}>
                About
              </Link>
              <Link to="/" onClick={iconHandler}>
                Services
              </Link>
              <Link to="/" onClick={iconHandler}>
                Portfolio
              </Link>
            </ul>
          </div>
          <div className="contact-btn-aside btn">
            <Link to="" className="btn contact-btn gradient-bg-btn ">
              Contact
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="mobile-menu">
            {nav === false ? (
              <AiOutlineMenu size={35} onClick={iconHandler} />
            ) : (
              <div className="mobile-menu-div">
                <div className="mobile-menu">
                  <ul className="unlisted">
                    <Link to="/" onClick={iconHandler}>
                      Home
                    </Link>
                    <Link to="/" onClick={iconHandler}>
                      About
                    </Link>
                    <Link to="/" onClick={iconHandler}>
                      Services
                    </Link>
                    <Link to="/" onClick={iconHandler}>
                      Portfolio
                    </Link>
                  </ul>
                  <Link to="" className="btn contact-btn gradient-bg-btn ">
                    Contact
                  </Link>
                </div>
                <GiCancel size={35} onClick={iconHandler} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Menu;
