/* eslint-disable prettier/prettier */
import { Meta, StoryObj } from "@storybook/react";
import { LaunchTable, LaunchTableProps } from "../../../pages/Launch/components/LaunchTable";

export default {
    title: "Components/Table/Launch",
    component: LaunchTable,
} as Meta;


export const Launch: StoryObj<LaunchTableProps> = {
    args: {
        data: [
            { id: 1, launchCode: 0, date: " ", success: false, rocket: { id: 0, name: "" }, crew: { id: 0, name: "", crewman: [] } },
            { id: 2, launchCode: 2, date: " ", success: false, rocket: { id: 0, name: "" }, crew: { id: 0, name: "", crewman: [] } },
            { id: 3, launchCode: 3, date: " ", success: false, rocket: { id: 0, name: "" }, crew: { id: 0, name: "", crewman: [] } },

        ],
        updateLaunch: (id: number, launch: any) => {
            console.log("Update Launch:", id, launch);
            return Promise.resolve();
        },
        deleteLaunch: (id: number) => {
            console.log("Delete Launch:", id);
            return Promise.resolve();
        },
    }
};

