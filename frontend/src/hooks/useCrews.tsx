import { useState } from "react";
import { Data } from "../pages/Crew/components/CrewData";
import { DeleteCrew, GetCrew, SubmitCrew, UpdateCrew } from "../service/CrewService";

export type useCrewMethods = {
    getCrews: () => Promise<void>;
    addCrew: (crew: Data) => Promise<void>;
    updateCrew: (id: number, Crew: Partial<Data>) => Promise<void>;
    deleteCrew: (id: number) => Promise<void>;
}

export const useCrew = (): [Data[], useCrewMethods] => {
    const [data, setData] = useState<Data[]>([]);

    const getCrews = async () => setData(await GetCrew());
    const addCrew = async (crew: Data) => { await SubmitCrew(crew); getCrews(); }
    const updateCrew = async (id: number, crew: Partial<Data>) => { await UpdateCrew(id, crew); getCrews() }
    const deleteCrew = async (id: number) => { await DeleteCrew(id); getCrews() }

    return [
        data,
        {
            getCrews,
            addCrew,
            updateCrew,
            deleteCrew
        }
    ];
}