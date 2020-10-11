import React, { Component } from 'react';

class ToyForm extends Component {

constructor(){
  super()
  this.state = {
    value1: '',
    value2: ''
  }
}


handleSubmit = (e) => {
  e.preventDefault()
  this.props.addToy(this.state.value1, this.state.value2)
  console.log("this works")
}

// handleChange = (e) => this.setState({value1: e.target[0].value, value2: e.target[1].value})



  render() {
    return (
      <div className="container">
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value1={this.state.value1} onChange={this.handleChange}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value2={this.state.value2} onChange={this.handleChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" onSubmit={this.handleSubmit}/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
