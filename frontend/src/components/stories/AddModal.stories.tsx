/* eslint-disable prettier/prettier */
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n";
import i18n from "../../i18n/config";
import { CrewAddForm } from "../../pages/Crew/components/CrewAddForm";
import { CrewmanAddForm } from "../../pages/Crewman/components/CrewmanAddForm";
import { LaunchAddForm } from "../../pages/Launch/components/LaunchAddForm";
import { RocketAddForm } from "../../pages/Rocket/components/RocketAddForm";
import { Modal, ModalProps } from "../Modal/Modal";

export default {
    title: "Form/Add/Modal",
    component: Modal,
    args: {
        isOpen: true
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
        children: <RocketAddForm onSubmit={function (): void {
            throw new Error("Function not implemented.");
        }} />,
    },
};

export const Crew: StoryObj<ModalProps> = {
    args: {
        isOpen: true,
        title: "Crew",
        children: <CrewAddForm onSubmit={function (): void {
            throw new Error("Function not implemented.");
        }} />,
    },
};

export const Crewman: StoryObj<ModalProps> = {
    args: {
        isOpen: true,
        title: "Crewman",
        children: <CrewmanAddForm onSubmit={function (): void {
            throw new Error("Function not implemented.");
        }} />,
    },
};

export const Launch: StoryObj<ModalProps> = {
    args: {
        isOpen: true,
        title: "Launch",
        children: <LaunchAddForm onSubmit={function (): void {
            throw new Error("Function not implemented.");
        }} />,
    },
};

