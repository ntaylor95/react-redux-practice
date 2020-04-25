import React from 'react';

class UserForm extends React.Component {
    state = {
        id: null,
        name: null,
        age: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });

        // this.setState((state, props) => ({
        //     counter: state.counter + props.increment
        // }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='id'>Id:</label>
                <input type='text' id='id' onChange={this.handleChange}></input>

                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' onChange={this.handleChange}></input>

                <label htmlFor='age'>Age:</label>
                <input type='text' id='age' onChange={this.handleChange}></input>

                <button>Submit</button>
            </form>
        )
    }
}

export default UserForm;