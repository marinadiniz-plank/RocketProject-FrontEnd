import React from "react";
import "../../assets/CSS/buttons.css";
import { DeleteRocket } from "../../service/RocketService";

type DeleteButtonProps = {
  id: number;
  onDelete: (id: number) => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
    DeleteRocket(id);
  };

  return (
    <button className="del_btn" onClick={handleDelete}>
      <i className="fa fa-delete-left"></i>
    </button>
  );
};

export default DeleteButton;
