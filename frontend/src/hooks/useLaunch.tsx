import { useState } from "react";
import { Data } from "../pages/Launch/components/LaunchData";
import { DeleteLaunch, GetLaunch, SubmitLaunch, UpdateLaunch } from "../service/LaunchService";

export type useLaunchMethods = {
    getLaunchs: () => Promise<void>;
    addLaunch: (Launch: Data) => Promise<void>;
    updateLaunch: (id: number, Launch: Partial<Data>) => Promise<void>;
    deleteLaunch: (id: number) => Promise<void>;
}

export const useLaunch = (): [Data[], useLaunchMethods] => {
    const [data, setData] = useState<Data[]>([]);

    const getLaunchs = async () => setData((await GetLaunch()).sort((a: { id: number; }, b: { id: number; }) => a.id - b.id));
    const addLaunch = async (launch: Data) => { await SubmitLaunch(launch); getLaunchs(); }
    const updateLaunch = async (id: number, launch: Partial<Data>) => { await UpdateLaunch(id, launch); getLaunchs() }
    const deleteLaunch = async (id: number) => { await DeleteLaunch(id); getLaunchs() }

    return [
        data,
        {
            getLaunchs,
            addLaunch,
            updateLaunch,
            deleteLaunch
        }
    ];
}