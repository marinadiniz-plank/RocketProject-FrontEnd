import { useState } from "react";
import { Data } from "../pages/Crewman/components/CrewmanData";
import { DeleteCrewman, GetCrewman, SubmitCrewman, UpdateCrewman } from "../service/CrewmanService";

export type useCrewmanMethods = {
    getCrewmans: () => Promise<void>;
    addCrewman: (crewman: Data) => Promise<void>;
    updateCrewman: (id: number, Crewman: Partial<Data>) => Promise<void>;
    deleteCrewman: (id: number) => Promise<void>;
}

export const useCrewman = (): [Data[], useCrewmanMethods] => {
    const [data, setData] = useState<Data[]>([]);

    const getCrewmans = async () => setData(await GetCrewman());
    const addCrewman = async (crewman: Data) => { await SubmitCrewman(crewman); getCrewmans(); }
    const updateCrewman = async (id: number, crewman: Partial<Data>) => { await UpdateCrewman(id, crewman); getCrewmans() }
    const deleteCrewman = async (id: number) => { await DeleteCrewman(id); getCrewmans() }

    return [
        data,
        {
            getCrewmans,
            addCrewman,
            updateCrewman,
            deleteCrewman
        }
    ];
}