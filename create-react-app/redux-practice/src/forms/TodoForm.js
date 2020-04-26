import React from 'react';

class TodoForm extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`the current state is ${JSON.stringify(this.state)}`);
        this.props.addTodo(this.state.content);
        
        //clear text
        this.setState({
            content: ''
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='content'>Enter a todo:</label>
                <input onChange={this.handleChange} type='text' value={this.state.content}></input>
            </form>
        )
    }
}

export default TodoForm;