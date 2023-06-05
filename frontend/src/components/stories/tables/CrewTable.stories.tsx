/* eslint-disable prettier/prettier */
import { Meta, StoryObj } from "@storybook/react";
import { CrewTable, CrewTableProps } from "../../../pages/Crew/components/CrewTable";

export default {
    title: "Components/Table/Crew",
    component: CrewTable,
} as Meta;


export const Crew: StoryObj<CrewTableProps> = {
    args: {
        data: [
            { id: 1, name: "Crew 1", crewman: [] },
            { id: 2, name: "Crew 2", crewman: [] },
            { id: 3, name: "Crew 3", crewman: [] },
        ],
        updateCrew: (id: number, crew: any) => {
            console.log("Update Crew:", id, crew);
            return Promise.resolve();
        },
        deleteCrew: (id: number) => {
            console.log("Delete Crew:", id);
            return Promise.resolve();
        },
    }
};

