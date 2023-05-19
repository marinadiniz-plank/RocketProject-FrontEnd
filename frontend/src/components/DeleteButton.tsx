import '../assets/CSS/buttons.css'

function DeleteButton() {
  return (
    <button 
    className="del_btn"
    onClick={() => console.log('Botão delete!')}>
       <i className="fa fa-delete-left"></i>
    </button>
  );
}

export default DeleteButton;
