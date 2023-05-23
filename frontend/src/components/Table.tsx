import React from "react";
import "../assets/CSS/table.css";
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";


type TableProps = {
  entityName: string,
  data: Record<number, any>[];
};

const GenericTable: React.FC<TableProps> = ({ entityName, data }) => {
  function getValue(value?: any) {
    return value || "";
  }

  return (
    <div className="data-div">
      <div className="divTable">
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((column) => (
                <th key={column}>{column}</th>
              ))}
              <th className="edit">Editar</th>
              <th className="delete">Excluir</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, colIndex) => (
                  <td key={colIndex}>{getValue(value)}</td>
                ))}
                <td className="edit_btn">
                  <UpdateButton
                    entityName={entityName}
                    formLabels={Object.keys(item).slice(0, -1).map(getValue)}
                    formPlaceholder={Object.values(item).slice(0, -1).map(getValue)}
                  />
                </td>
                <td className="del_btn">
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenericTable;
