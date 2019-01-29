import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired //todo is property for TodoItem Tag. see Todos.js
}

export default TodoItem
