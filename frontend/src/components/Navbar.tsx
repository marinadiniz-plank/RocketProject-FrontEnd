import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/nav.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="nav">
			<div style={{ width: isOpen ? "200px" : "75px" }} className="sidebar">
				<div className="top_section">
					<i className="fas fa-bars" id="navbar_btn" onClick={toggle} />
				</div>
				<div className="content">
					<Link to="/">
						<i className="fas fa-home"></i>
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>Home</span>
					</Link>
					<Link to="/Rocket">
						<i className="fas fa-light fa-rocket"></i>
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>Rocket</span>
					</Link>
					<Link to="/Crewman">
						<i className="fas fa-light fa-user"></i>
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>Crewman</span>
					</Link>
					<Link to="/Crew">
						<i className="fas fa-light fa-users"></i>
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>Crew</span>
					</Link>
					<Link to="/Launch">
						<i className="fas fa-light fa-play"></i>
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>Launch</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
