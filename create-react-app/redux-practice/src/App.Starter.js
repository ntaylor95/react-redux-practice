import React from 'react';
import ListItems from './components/ListItems'
import UserForm from './forms/UserForm'

class App extends React.Component {
  state = {
    items: [
      {id: 1, name: 'Nicole', age: 38},
      {id:2, name: 'Henry', age: 18},
      {id:3, name: 'Bob', age: 10}
    ]
  }

  handleSubmit = (item) => {
    console.log(`The item is ${JSON.stringify(item)}`);

    // this.setState((state, props) => ({
    //     counter: state.counter + props.increment
    // }));

    let myArr = [...this.state.items, item];
    // const myArr = this.state.items;
    // myArr.push(item);
    this.setState({items: myArr});
  }

  handleDeleteItem = (id) => {
    console.log(`I am deleting id ${id}`);
    const items = this.state.items.filter(item => {
      return parseInt(item.id) !== parseInt(id);
    });
    this.setState({
      items: items
    })
  }

  shouldComponentUpdate(nextState, nextProps) {
    console.log('Should Component Update');
    return true;
  }

  getSnapshotBeforeUpdate(snapshot) {
    console.log('Get Snapshot before update');
    return snapshot;
  }

  componentDidMount() {
    console.log('Component Did Mount');
    //god place to make API calls
  }

  componentDidUpdate(prevState, prevProps) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component will Unmount');
  }

  render() {
    console.log('App did render');
    return (
      <div className="App">
        <h1>Redux Practice</h1>
        <ListItems onDelete={this.handleDeleteItem} items={this.state.items} />

        <div>
          <UserForm onSubmit={this.handleSubmit} />
        </div>
      </div>
      
    );
  }
};

export default App;
