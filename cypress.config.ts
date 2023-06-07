/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from "cypress";

export default defineConfig({
	projectId: "hztvv2",
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "https://rocketproject-frontend-marinadiniz-plank.vercel.app/",
	},
	requestTimeout: 60000,
	responseTimeout: 60000,
	defaultCommandTimeout: 60000,
	component: {
		devServer: {
			framework: "react",
			bundler: "vite",
		},
	},
});
