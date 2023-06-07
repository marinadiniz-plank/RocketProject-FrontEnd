import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header, { HeaderProps } from "../Common/Header";

export default {
	title: "Components/Header",
	component: Header,
	args: {
		pageTitle: "RocketProject",
	},
	decorators: [
		(Story) => (
			<Router>
				<Story />
			</Router>
		),
	],
} as Meta<HeaderProps>;

export const Default: StoryObj<HeaderProps> = {};
