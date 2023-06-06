import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../../assets/CSS/nav.css";
import {
	bars,
	crew,
	crewman,
	home,
	launch,
	rocket,
} from "../../assets/svgImages/exportSVG";

const Navbar: React.FC = () => {
	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="nav">
			<div style={{ width: isOpen ? "230px" : "75px" }} className="sidebar">
				<div className="top_section">
					<img src={bars} id="navbar_btn" onClick={toggle} />
				</div>
				<div className={`content ${isOpen ? "content-open" : ""}`}>
					<Link to="/" className="nav-link">
						<img src={home} className="icons" />
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>
							{t("components.nav.home")}
						</span>
					</Link>
					<Link to="/Rocket" className="nav-link">
						<img src={rocket} className="icons" />
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>
							{t("components.nav.rocket")}
						</span>
					</Link>
					<Link to="/Crewman" className="nav-link">
						<img src={crewman} className="icons" />
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>
							{t("components.nav.crewman")}
						</span>
					</Link>
					<Link to="/Crew" className="nav-link">
						<img src={crew} className="icons" />
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>
							{t("components.nav.crew")}
						</span>
					</Link>
					<Link to="/Launch" className="nav-link">
						<img src={launch} className="icons" />
						<span style={{ visibility: isOpen ? "visible" : "hidden" }}>
							{t("components.nav.launch")}
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
