import React from "react";
import "../../assets/CSS/table.css";
import DeleteButton from "../Buttons/DeleteButton";
import UpdateButton from "../Buttons/UpdateButton";

type Data = {
    id: number;
    launchCode: string;
    date: Date;
    success: boolean;
    rocket: {
        id: number;
        name: string;
    };
    crew: {
        id: number;
        name: string;
        crewman: [];
    }
};

const LaunchTable: React.FC<{ data: Data[] }> = ({ data }) => {
    function getValue(value?: string | number | boolean | Date | { id: number; name: string; } | { id: number; name: string; crewman: [] }): string {
        if (value === undefined) {
            return "";
        } else if (typeof value === "boolean") {
            return value ? "true" : "false";
        } else if (value instanceof Date) {
            return value.toLocaleString();
        } else if (typeof value === "object" && value !== null) {
            return value.name;
        } else {
            return String(value);
        }
    }

    const handleDelete = (id: number) => {
        console.log(`Deleting row with id ${id}`);
    };

    const handleUpdate = (id: number, item: Data) => {
        console.log(`Updating row with id ${id} with data`, item);
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
                            <th>Success</th>
                            <th>Rocket</th>
                            <th>Crew</th>
                            <th className="edit">Editar</th>
                            <th className="delete">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: Data, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.launchCode}</td>
                                <td>{item.date.toLocaleString()}</td>
                                <td>{item.success}</td>
                                <td>{item.rocket.id}</td>
                                <td>{item.crew.id}</td>
                                <td className="edit_btn">
                                    <UpdateButton
                                        entityName={"Launch"}
                                        formLabels={Object.keys(item).slice(0, -1).map(getValue)}
                                        formPlaceholder={Object.values(item)
                                            .slice(0, -1)
                                            .map(getValue)}
                                        id={item.id}
                                        onUpdate={() => handleUpdate(item.id, item)}
                                    />
                                </td>
                                <td className="del_btn">
                                    <DeleteButton
                                        entityName={"Launch"}
                                        id={item.id}
                                        onDelete={() => handleDelete(item.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LaunchTable;
