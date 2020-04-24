import React from 'react';

class ListItem extends React.Component {
    handleClick = (e) => {
        console.log(e.target.dataset.id);
    }
    render() {
      return (
        <li><div onClick={this.handleClick} data-id={this.props.id}>{this.props.name}</div></li>
    );
  }
};

export default ListItem;