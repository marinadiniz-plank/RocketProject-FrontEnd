import React from "react";
import "../assets/CSS/table.css";

export type TableProps = {
	children: React.ReactNode;
};

const GenericTable: React.FC<TableProps> = ({ children }) => {
	return (
		<div className="data-div">
			<div className="divTable">
				<table>{children}</table>
			</div>
		</div>
	);
};

export default GenericTable;
