import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {
  displayToys = () => {
    return this.props.toys.map( toyObj => {
      return <ToyCard toy={toyObj} donate={this.props.donate} addLike={this.props.addLike}/>
    })
  }
  
  render(){
    return(
      <div id="toy-collection">
      {this.displayToys()}
    </div>
    )
  }
}



// const ToyContainer = (props) => {
//   const displayToys = () => {
//     console.log('hi')
//     return props.toys.map( toyObj => {
//       return <ToyCard toy={toyObj}/>
//     })
//   }
//   return(
//     <div id="toy-collection">
//       {displayToys()}
//     </div>
//   );
// }

export default ToyContainer;
