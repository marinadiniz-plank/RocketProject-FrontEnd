import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n";
import i18n from "../../i18n/config";
import { CrewEditForm } from "../../pages/Crew/components/CrewEditForm";
import { CrewmanEditForm } from "../../pages/Crewman/components/CrewmanEditForm";
import { LaunchEditForm } from "../../pages/Launch/components/LaunchEditForm";
import { RocketEditForm } from "../../pages/Rocket/components/RocketEditForm";
import { Modal, ModalProps } from "../Modal/Modal";

export default {
	title: "Form/Edit/Modal",
	component: Modal,
	args: {
		isOpen: true,
	},
	decorators: [
		withI18n,
		(Story: React.ComponentType) => (
			<I18nextProvider i18n={i18n}>
				<Story />
			</I18nextProvider>
		),
	],
} as Meta<ModalProps>;

export const Rocket: StoryObj<ModalProps> = {
	args: {
		isOpen: true,
		title: "Rocket",
		children: (
			<RocketEditForm
				onSubmit={function (): void {
					throw new Error("Function not implemented.");
				}}
				initialData={{
					id: 0,
					name: "",
				}}
			/>
		),
	},
};

export const Crew: StoryObj<ModalProps> = {
	args: {
		isOpen: true,
		title: "Crew",
		children: (
			<CrewEditForm
				onSubmit={function (): void {
					throw new Error("Function not implemented.");
				}}
				initialData={{
					id: 0,
					name: "",
					crewman: [],
				}}
			/>
		),
	},
};

export const Crewman: StoryObj<ModalProps> = {
	args: {
		isOpen: true,
		title: "Crewman",
		children: (
			<CrewmanEditForm
				onSubmit={function (): void {
					throw new Error("Function not implemented.");
				}}
				initialData={{
					id: 0,
					name: "",
					patent: "",
				}}
			/>
		),
	},
};

export const Launch: StoryObj<ModalProps> = {
	args: {
		isOpen: true,
		title: "Launch",
		children: (
			<LaunchEditForm
				onSubmit={function (): void {
					throw new Error("Function not implemented.");
				}}
				initialData={{
					id: 0,
					launchCode: 0,
					date: "",
					success: false,
					rocket: {
						id: 0,
						name: "",
					},
					crew: {
						id: 0,
						name: "",
						crewman: [],
					},
				}}
			/>
		),
	},
};
