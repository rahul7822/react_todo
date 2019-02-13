import React, { Component } from 'react'

export class AddTodo extends Component {
  
  state={
      title:''
  }  

  onSubmit=(e)=>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title:''});
  }

  onChange=(e)=>this.setState({[e.target.name]:e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display:'flex'}}>
          <input 
            type="text" 
            name="title" 
            value={this.state.title}
            style={{flex:'10',padding:'5px'}} 
            placeholder="Add Todo ..."
            onChange={this.onChange}
          />
          <input 
            type="submit" 
            value="Submit" 
            className="btn" 
            style={{flex:'1'}}
          />
      </form>
    )
  }
}

export default AddTodo
