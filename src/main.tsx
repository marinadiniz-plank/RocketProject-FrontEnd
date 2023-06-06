import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App.tsx";
import "./i18n/config.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>
);
