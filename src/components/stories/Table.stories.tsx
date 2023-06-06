/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n";
import i18n from "../../i18n/config";
import { CrewTable } from "../../pages/Crew/components/CrewTable";
import { Data } from "../../pages/Crewman/components/CrewmanData";
import CrewmanTable from "../../pages/Crewman/components/CrewmanTable";
import { LaunchTable } from "../../pages/Launch/components/LaunchTable";
import RocketTable from "../../pages/Rocket/components/RocketTable";
import Table, { TableProps } from "../Table";

export default {
    title: "Components/Table",
    component: Table,
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
} as Meta<TableProps>;

export const Rocket: StoryObj<TableProps> = {
    args: {
        children: (
            <RocketTable
                data={[
                    { id: 1, name: "Rocket 1" },
                    { id: 2, name: "Rocket 2" },
                    { id: 3, name: "Rocket 3" },
                ]}
                updateRocket={function (
                    id: number,
                    rocket: Partial<Data>
                ): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
                deleteRocket={function (id: number): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
            />
        ),
    },
};

export const Crew: StoryObj<TableProps> = {
    args: {
        children: (
            <CrewTable
                data={[
                    { id: 1, name: "Crew 1", crewman: [] },
                    { id: 2, name: "Crew 2", crewman: [] },
                    { id: 3, name: "Crew 3", crewman: [] },
                ]}
                updateCrew={function (
                    id: number,
                    crew: Partial<Data>
                ): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
                deleteCrew={function (id: number): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
            />
        ),
    },
};

export const Crewman: StoryObj<TableProps> = {
    args: {
        children: (
            <CrewmanTable
                data={[
                    { id: 1, name: "Crewman 1", patent: "Patent 1" },
                    { id: 2, name: "Crewman 2", patent: "Patent 2" },
                    { id: 3, name: "Crewman 3", patent: "Patent 3" },
                ]}
                updateCrewman={function (
                    id: number,
                    crewman: Partial<Data>
                ): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
                deleteCrewman={function (id: number): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
            />
        ),
    },
};

export const Launch: StoryObj<TableProps> = {
    args: {
        children: (
            <LaunchTable
                data={[
                    {
                        id: 1,
                        launchCode: 0,
                        date: " ",
                        success: false,
                        rocket: { id: 0, name: "" },
                        crew: { id: 0, name: "", crewman: [] },
                    },
                    {
                        id: 2,
                        launchCode: 2,
                        date: " ",
                        success: false,
                        rocket: { id: 0, name: "" },
                        crew: { id: 0, name: "", crewman: [] },
                    },
                    {
                        id: 3,
                        launchCode: 3,
                        date: " ",
                        success: false,
                        rocket: { id: 0, name: "" },
                        crew: { id: 0, name: "", crewman: [] },
                    },
                ]}
                updateLaunch={function (
                    id: number,
                    launch: Partial<Data>
                ): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
                deleteLaunch={function (id: number): Promise<void> {
                    throw new Error("Function not implemented.");
                }}
            />
        ),
    },
};
