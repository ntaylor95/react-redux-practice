import React from 'react';

const ListItem = (props) => { 
  console.log('List Item Rendered');

  const handleClick = (e) => {
    props.handleClick(e.target.dataset.id);
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    props.handleDelete(id);
  }

  const handleAnotherDelete = (e) => {
    e.preventDefault();
    props.handleDelete(e.target.dataset.id);
  }

  return (
    <li>
      <div onClick={handleClick} data-id={props.id}>
        {props.name}
      </div>
      
      <button onClick={(e) => handleDelete(e, props.id)} data-id={props.id}>Delete</button>

      <button onClick={handleAnotherDelete} data-id={props.id}>Another Delete</button>
    </li>
  );
};

export default ListItem;