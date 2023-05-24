import React from "react";
import "../../assets/CSS/buttons.css";
import { DeleteCrew } from "../../service/CrewService";
import { DeleteRocket } from "../../service/RocketService";

type DeleteButtonProps = {
  id: number;
  onDelete: (id: number) => void;
  entityName: string
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ entityName, id, onDelete }) => {
  const handleDelete = () => {
    console.log(`Deleting row in ${entityName}`);

    onDelete(id);
    if (entityName === 'Rocket') {
      DeleteRocket(id);
    } else if (entityName === 'Crew') {
      DeleteCrew(id);
    }
  };

  return (
    <button className="del_btn" onClick={handleDelete}>
      <i className="fa fa-delete-left"></i>
    </button>
  );
};

export default DeleteButton;
