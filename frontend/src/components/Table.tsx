/* eslint-disable prettier/prettier */
import React from "react";
import "../assets/CSS/table.css";

type TableProps = {
    columns: React.ReactNode;
    rows: React.ReactNode;
};

const GenericTable: React.FC<TableProps> = ({ columns, rows }) => {

    return (
        <div className="data-div">
            <div className="divTable">
                <table>
                    <thead>
                        <tr>
                            {columns}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GenericTable;
