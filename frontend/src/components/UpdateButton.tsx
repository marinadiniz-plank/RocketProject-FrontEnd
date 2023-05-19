
import "../assets/CSS/buttons.css";
function UpdateButton() {
  return (
    <button 
    className="edit_btn"
    onClick={() => console.log('Botão editar!')}>
       <i className="fa fa-pen"></i>
    </button>
  );
}

export default UpdateButton;
