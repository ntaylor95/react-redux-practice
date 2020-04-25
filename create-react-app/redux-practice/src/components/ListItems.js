import React from 'react';
import ListItem from './ListItem';

const ListItems = (props) => {
  // handleClick = (e) => {
  //   console.log(e.target.dataset.id);
  // }

  const handleClick = (id) => {
    console.log(id);
  }

  const handleDelete = (id) => {
    props.onDelete(id);
  }

  console.log(props.items);
  const items = props.items.map((item) => {
    return (
      <ListItem handleDelete={handleDelete} handleClick={handleClick} key={item.id} id={item.id} name={item.name} />
    )
  });
  return (
    <ul>
      {items}
    </ul>
  );
};

export default ListItems;