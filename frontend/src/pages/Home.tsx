import { Outlet } from "react-router-dom";
import bannerImg from "../assets/header-img.svg";
import Header from "../components/Header";

function Home() {
	return (
		<>
			<Header pageTitle="RocketProject" />
			<div className="banner">
				<h4>
					"There is a theory which states that if ever anyone discovers
					exactly what the Universe is for and why it is here, it will
					instantly disappear and be replaced by something even more
					bizarre and inexplicable. There is another theory which states
					that this has already happened." - Douglas Adams.
				</h4>
				<img className="logo" src={bannerImg} alt="React Logo" />
			</div>
			<Outlet />
		</>
	);
}

export default Home;
