import React from "react";
import { LanguageSelector } from "./DropMenu";
import Navbar from "./Navbar";

export type HeaderProps = {
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
