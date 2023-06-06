import React from "react";
import "../../assets/CSS/buttons.css";

type DeleteButtonProps = {
	id: number;
	deleteRocket: (id: number) => Promise<void>;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleteRocket }) => {
	const handleDeleteRocket = () => {
		deleteRocket(id);
	};

	return (
		<button type="button" className="del_btn" onClick={handleDeleteRocket}>
			<i className="fa fa-delete-left"></i>
		</button>
	);
};

export default DeleteButton;
