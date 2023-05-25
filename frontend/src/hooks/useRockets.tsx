import { useState } from "react";
import { Data } from "../pages/Rocket/components/RocketData";
import { DeleteRocket, GetRocket, SubmitRocket, UpdateRocket } from "../service/RocketService";

export type useRocketMethods = {
    getRockets: () => Promise<void>;
    addRocket: (rocket: Data) => Promise<void>;
    updateRocket: (id: number, rocket: Partial<Data>) => Promise<void>;
    deleteRocket: (id: number) => Promise<void>;
}

export const useRocket = (): [Data[], useRocketMethods] => {
    const [data, setData] = useState<Data[]>([]);

    const getRockets = async () => setData(await GetRocket());
    const addRocket = async (rocket: Data) => { setData(await SubmitRocket(rocket)); getRockets(); }
    const updateRocket = async (id: number, rocket: Partial<Data>) => { setData(await UpdateRocket(id, rocket)); getRockets() }
    const deleteRocket = async (id: number) => { await DeleteRocket(id); getRockets() }

    return [
        data,
        {
            getRockets,
            addRocket,
            updateRocket,
            deleteRocket
        }
    ];
}
