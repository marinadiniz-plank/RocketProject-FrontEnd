/* eslint-disable prettier/prettier */
import { Meta, StoryObj } from "@storybook/react";
import CrewmanTable, { CrewmanTableProps } from "../../../pages/Crewman/components/CrewmanTable";

export default {
    title: "Components/Table/Crewman",
    component: CrewmanTable,
} as Meta;


export const Crewman: StoryObj<CrewmanTableProps> = {
    args: {
        data: [
            { id: 1, name: "Crewman 1", patent: "Patent 1" },
            { id: 2, name: "Crewman 2", patent: "Patent 2" },
            { id: 3, name: "Crewman 3", patent: "Patent 3" },
        ],
        updateCrewman: (id: number, crewman: any) => {
            console.log("Update Crewman:", id, crewman);
            return Promise.resolve();
        },
        deleteCrewman: (id: number) => {
            console.log("Delete Crewman:", id);
            return Promise.resolve();
        },
    }
};

