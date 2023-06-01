/* eslint-disable prettier/prettier */
import "../../../assets/CSS/table.css";
import UpdateButton from "../../../components/Buttons/UpdateButton";
import { Data } from "./LaunchData";
import { LaunchEditForm } from "./LaunchEditForm";

type LaunchTableModal = {
    data: Data[];
    updateLaunch: (id: number, Launch: Partial<Data>) => Promise<void>;
    deleteLaunch: (id: number) => Promise<void>;
};

export const LaunchTable: React.FC<LaunchTableModal> = ({
    data,
    updateLaunch,
    deleteLaunch,
}) => {
    const handleUpdateLaunch = (id: number, formData: Data) => {
        updateLaunch(id, formData);
    };

    const handleDeleteLaunch = (id: number) => {
        deleteLaunch(id);
    };

    return (
        <div className="data-div">
            <div className="divTable">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>LaunchCode</th>
                            <th>Date</th>
                            <th>success</th>
                            <th>Rocket</th>
                            <th>Crew</th>
                            <th className="edit">Editar</th>
                            <th className="delete">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: Data) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.launchCode}</td>
                                <td>{item.date}</td>
                                <td>{item.success.toLocaleString()}</td>
                                <td>{item.rocket.id}</td>
                                <td>{item.crew.id}</td>
                                <td className="edit_col">
                                    <UpdateButton title={"Launch"}>
                                        <LaunchEditForm
                                            initialData={item}
                                            onSubmit={handleUpdateLaunch}
                                        />
                                    </UpdateButton>
                                </td>
                                <td className="del_col">
                                    <button
                                        type="button"
                                        className="del_btn"
                                        onClick={() => handleDeleteLaunch(item.id)}
                                    >
                                        <i className="fa fa-delete-left"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
