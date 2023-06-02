/* eslint-disable prettier/prettier */
import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();
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
                            <th>{t("components.table.launchCode")}</th>
                            <th>{t("components.table.date")}</th>
                            <th>{t("components.table.success")}</th>
                            <th>{t("components.table.rocket")}</th>
                            <th>{t("components.table.crew")}</th>
                            <th className="edit">{t("components.table.edit")}</th>
                            <th className="delete">{t("components.table.delete")}</th>
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
                                    <UpdateButton title={t("pages.launch")}>
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
