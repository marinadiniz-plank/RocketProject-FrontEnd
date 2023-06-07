import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Footer from "../Common/Footer";

test("renders footer component", () => {
	render(<Footer />);
});
