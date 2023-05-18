import { useState } from "react";
import "../../public/CSS/main.css";
import "../../public/CSS/nav.css";
import Navbar from "./Navbar";

type HeaderProps = {
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);

  return (
      <header>
        <i className="fas fa-bars" id="navbar_btn" onClick={showNavbar}></i>
        {navbar && <Navbar active={setNavbar} />}
        <h3>{ pageTitle }</h3>
      </header>
  );
};

export default Header;