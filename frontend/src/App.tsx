import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Crew from "./pages/Crew/Crew";
import Crewman from "./pages/Crewman/Crewman";
import ErrorPage from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import Launch from "./pages/Launch/Launch";
import Rocket from "./pages/Rocket/Rocket";

function App() {
	const location = useLocation();
	const { t } = useTranslation();

	const getPageTitle = () => {
		switch (location.pathname) {
			case "/":
				return "RocketProject";
			case "/Rocket":
				return t("pages.rocket");
			case "/Crew":
				return t("pages.crew");
			case "/Crewman":
				return t("pages.crewman");
			case "/Launch":
				return t("pages.launch");
			default:
				return "RocketProject";
		}
	};
	const pageTitle = getPageTitle();

	return (
		<>
			<Header pageTitle={pageTitle} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Rocket" element={<Rocket />} />
				<Route path="/Launch" element={<Launch />} />
				<Route path="/Crewman" element={<Crewman />} />
				<Route path="/Crew" element={<Crew />} />
				<Route path="#" element={<ErrorPage />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
