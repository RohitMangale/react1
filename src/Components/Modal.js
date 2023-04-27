function Modal(props){

    function cancelModal(){
        props.onCancel();
    }
    function confirmModal(){
        props.onCancel();
    }

    return(
        <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={cancelModal} >Cancel</button>
        <button className="btn" onClick={confirmModal} >Confirm</button>
        </div>
    );
}

export default Modal;