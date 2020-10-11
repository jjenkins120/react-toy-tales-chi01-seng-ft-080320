import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addLike = (id, likeCount) => {
    const newObj = {
      likes: likeCount + 1
    }
    const reqObj = {
      method: 'PATCH', 
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newObj)
    }
    fetch(`http://localhost:3000/toys/${id}`, reqObj)
    .then(resp => resp.json())
    .then( () => {
      const newToyArr = this.state.toys.map(toy => {
        if(toy.id === id) {
          return {
            ...toy,
            likes: toy.likes + 1
          }
        } else {
          return toy
        }
      })
      this.setState({
        toys: newToyArr
      })
    })
  }

  donate = (id) => {
    const reqObj = {
      method: 'DELETE'
    }
    fetch(`http://localhost:3000/toys/${id}`, reqObj)
    .then(resp => resp.json())
    .then( () => {
      const newToysArr = this.state.toys.filter( toy => toy.id !== id)
      this.setState({
        toys: newToysArr
      })
    })
  }

  addToy = (name, imageUrl) => {
    const newObj = {
      name: name, 
      image: imageUrl
    }
    const reqObj = {
      method: 'POST', 
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newObj)
    }
    fetch(`http://localhost:3000/toys`, reqObj)
    .then(resp => resp.json())
    .then( newToy => {
      const newToyArray = [...this.state.toys,newToy]
      this.setState({
        toys: newToyArray
      })
    })
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toyArray=> {
      this.setState({
        toys: toyArray
      })
    })
  }

  render(){

    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} donate={this.donate} addLike={this.addLike}/>
      </>
    );
  }

}

export default App;
