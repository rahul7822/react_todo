import React, { Component } from 'react';
import TodoTtem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        //console.log(this.props.todos);
        return this.props.todos.map((todo)=>(
            <TodoTtem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
        ));
    }
}

//PropTypes
Todos.propTypes={
    todos:PropTypes.array.isRequired //todos is property for Todos Tag. see App.js
}
export default Todos;