import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n";
import i18n from "../../i18n/config";
import AddButton, { AddButtonProps } from "../Buttons/AddButton";

export default {
	title: "Form/Add/AddButton",
	component: AddButton,
	decorators: [
		withI18n,
		(Story: React.ComponentType) => (
			<I18nextProvider i18n={i18n}>
				<Story />
			</I18nextProvider>
		),
	],
} as Meta<AddButtonProps>;

export const Default: StoryObj<AddButtonProps> = {};
