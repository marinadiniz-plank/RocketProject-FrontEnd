import React from "react";
import "../../assets/CSS/table.css";
import DeleteButton from "../Buttons/DeleteButton";
import UpdateButton from "../Buttons/UpdateButton";


type Data = {
    id: number;
    name: string;
    crewman: {
        id: number;
        name: string;
        patent: string;
    }[]
};

const CrewTable: React.FC<{ data: Data[] }> = ({ data }) => {
    function getValue(value?: string | number | { id: number; name: string; patent: string }[]): string {
        if (Array.isArray(value)) {
            return value.map((item) => item.name).join(", ");
        }
        return value !== undefined ? String(value) : "";
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
                            <th>Name</th>
                            <th>Crewmans</th>
                            <th className="edit">Editar</th>
                            <th className="delete">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: Data, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.crewman.map(crewmanObj => crewmanObj.id).join(", ")}
                                </td>
                                <td className="edit_btn">
                                    <UpdateButton
                                        entityName={"Crew"}
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
                                        entityName={"Crew"}
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

export default CrewTable;
