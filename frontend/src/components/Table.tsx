import React from "react";
import "../assets/CSS/table.css";

import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

type TableProps = {
  data: Record<number, any>[];
}

const GenericTable: React.FC<TableProps> = ({ data }) => {
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
                  <td key={colIndex}>{value}</td>
                ))}
                <th className="edit_btn"><UpdateButton /></th>
                <th className="del_btn"><DeleteButton /></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenericTable;
