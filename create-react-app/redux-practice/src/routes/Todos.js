import React from 'react';
import TodoForm from '../forms/TodoForm';

class TodosPage extends React.Component {
    state = {
        items: [
          {id:1, content: 'Do Something here'},
          {id:2, content: 'Do something there'}
        ]
    }
    
    handleDelete = (id) => {
        console.log(`I am deleting id ${id}`);
        const todos = this.state.items.filter(item => {
            return parseInt(item.id) !== parseInt(id);
        });
        this.setState({
            items: todos
        });
    }
    
    addTodo = (content) => {
        const todo = {
            id: Math.random(),
            content
        }

        const todos = [...this.state.items, todo];

        this.setState({
            items: todos
        })
    }

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">My ToDo List</h1>
                <Todos todos={this.state.items} handleDelete={this.handleDelete}/>
                <TodoForm addTodo={this.addTodo} />
            </div> 
        )
    }
}

const Todos = ({todos, handleDelete}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className="collection-item">
                    <span onClick={() => {handleDelete(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have not more items in your to do list</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div> 
    )
}

export default TodosPage;