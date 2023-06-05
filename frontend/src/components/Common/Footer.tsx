import { useTranslation } from "react-i18next";
import "../../assets/CSS/main.css";

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer>
			<h5>
				{t("pages.footer")}{" "}
				<a href="https://www.joinplank.com/">fellowship plank </a>{" "}
			</h5>
		</footer>
	);
};

export default Footer;
