import React from 'react';
import ListItem from './ListItem';

class ListItems extends React.Component {
  
  render() {
    console.log(this.props.items);
    const items = this.props.items.map((item) => {
        return (
          <ListItem key={item.id} id={item.id} name={item.name}/>
        )
    });
    return (
      <ul>
        {items}
      </ul>
    );
  }
};

export default ListItems;