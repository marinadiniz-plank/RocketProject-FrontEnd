/* eslint-disable react/no-unescaped-entities */
import bannerImg from "../../assets/header-img.svg";

export function Banner() {
	return (
		<div className="banner">
			<h4>
				"There is a theory which states that if ever anyone discovers
				exactly what the Universe is for and why it is here, it will
				instantly disappear and be replaced by something even more bizarre
				and inexplicable. There is another theory which states that this has
				already happened." - Douglas Adams.
			</h4>
			<img className="logo" src={bannerImg} alt="React Logo" />
		</div>
	);
}
