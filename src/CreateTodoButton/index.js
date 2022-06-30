import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(props) {
  const onClickBButton =(msg)=>{
    alert(msg);
  };

  return (
    <button 
      className="CreateTodoButton"
      onClick ={()=>onClickBButton('aquí se abre el modal')}
      >+</button>
      
    );
}

export { CreateTodoButton };