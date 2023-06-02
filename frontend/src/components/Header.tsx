import "../assets/CSS/main.css";
import "../assets/CSS/nav.css";
import { LanguageSelector } from "./DropMenu";
import Navbar from "./Navbar";

type HeaderProps = {
	pageTitle: string;
};

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
	return (
		<header>
			<Navbar />
			<h3>{pageTitle}</h3>
			<LanguageSelector />
		</header>
	);
};

export default Header;
