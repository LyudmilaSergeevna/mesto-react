import React from "react";
import PopupWithForm from "./PopupWithForm";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";

function DeletePopup(props) {

  function handleSubmit(evt) {
    evt.preventDefault();
   // props.onUpdateAvatar({
      //link:inputRef.current.value
    
  }

return (
  <PopupWithForm name="delete" title="Вы уверены?" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
    </PopupWithForm>  
);

}

export default DeletePopup;