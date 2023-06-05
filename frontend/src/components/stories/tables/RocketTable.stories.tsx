/* eslint-disable prettier/prettier */
import { Meta, StoryObj } from "@storybook/react";
import RocketTable, {
    RocketTableProps,
} from "../../../pages/Rocket/components/RocketTable";

export default {
    title: "Components/Table/Rocket",
    component: RocketTable,
} as Meta;


export const Rocket: StoryObj<RocketTableProps> = {
    args: {
        data: [
            { id: 1, name: "Rocket 1" },
            { id: 2, name: "Rocket 2" },
            { id: 3, name: "Rocket 3" },
        ],
        updateRocket: (id: number, rocket: any) => {
            console.log("Update Rocket:", id, rocket);
            return Promise.resolve();
        },
        deleteRocket: (id: number) => {
            console.log("Delete Rocket:", id);
            return Promise.resolve();
        },
    }
};

