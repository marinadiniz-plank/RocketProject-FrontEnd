import '../../public/CSS/addbutton.css'

function AddButton() {
  return (
    <button 
    className="add_btn"
    onClick={() => console.log('Botão clicado!')}>
       <i className="fas fa-light fa-plus"></i>
       add
    </button>
  );
}

export default AddButton;
