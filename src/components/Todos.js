import React, { Component } from 'react';
import TodoTtem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        //console.log(this.props.todos);
        return this.props.todos.map((todo)=>(
            <TodoTtem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

//PropTypes
Todos.propTypes={
    todos:PropTypes.array.isRequired, //todos is property for Todos Tag. see App.js
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
}
export default Todos;