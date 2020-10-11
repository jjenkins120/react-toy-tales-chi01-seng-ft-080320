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
  console.log(this.state.value1, this.state.value2)
}

handleChange1 = (e) => this.setState({value1: e.target.value})

handleChange2 = (e) => this.setState({value2: e.target.value})

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value1={this.state.value1} onChange={this.handleChange1}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value2={this.state.value2} onChange={this.handleChange2}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
