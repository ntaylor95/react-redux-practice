import React from 'react';
import ListItems from './components/ListItems'

class App extends React.Component {
  render() {
    const items = [
      {id: 1, name: 'Nicole'},
      {id:2, name: 'Henry'},
      {id:3, name: 'Bob'}
    ];

    return (
      <div className="App">
        <h1>Redux Practice</h1>
        <ListItems items={items} />
      </div>
      
    );
  }
};

export default App;
