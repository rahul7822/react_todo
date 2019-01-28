import React, { Component } from 'react';
import TodoTtem from './TodoItem';

class Todos extends Component {
    render() {
        //console.log(this.props.todos);
        return this.props.todos.map((todo)=>(
            <TodoTtem todo={todo}/>
        ));
    }
}

export default Todos;