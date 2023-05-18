import React from "react";
import "../../public/CSS/table.css";

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
              <th className="edit_btn">Editar</th>
              <th className="delete_btn">Excluir</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
                <th className="edit_btn"><i className="fa fa-pen"></i></th>
                <th className="delete_btn"><i className="fa fa-delete-left"></i></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenericTable;
