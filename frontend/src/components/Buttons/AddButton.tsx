import { ReactNode, useState } from "react";
import "../../assets/CSS/buttons.css";
import { Modal } from "../Modal/Modal";

type AddButtonProps = {
	title: string;
	children: ReactNode;
};

const AddButton: React.FC<AddButtonProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<a href="#" className="add_btn" onClick={() => setIsOpen(true)}>
				<h5>Add</h5>
			</a>
			{isOpen && (
				<Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
					{children}
				</Modal>
			)}
		</>
	);
};

export default AddButton;
