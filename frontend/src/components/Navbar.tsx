import "../assets/CSS/nav.css";
import React from "react";
import { Link } from 'react-router-dom';

type NavbarProps = {
  active: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ active }) => {
  
  const closeNavbar = () => {
    active(false);
  };

  return (
    <div className="nav">
      <i className="fas fa-bars" id="navbar_btn" onClick={closeNavbar}></i>
      <div className="content">
        <Link to="/">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/Rocket">
          <i className="fas fa-light fa-rocket"></i>
          <span>Rocket</span>
        </Link>
        <Link to="/Crewman">
          <i className="fas fa-light fa-user"></i>
          <span>Crewman</span>
        </Link>
        <Link to="/Crew">
          <i className="fas fa-light fa-users"></i>
          <span>Crew</span>
          </Link>
        <Link to="/Launch">
          <i className="fas fa-light fa-play"></i>
          <span>Launch</span>
          </Link>
      </div>
      </div>
  );
};
// style={{marginLeft: isOpen ? "50px" : "0px"}} 
export default Navbar;
