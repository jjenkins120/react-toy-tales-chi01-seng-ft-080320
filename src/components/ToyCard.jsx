import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelClick = (e) => {
    this.props.donate(this.props.toy.id)
  }

  handleLikeClick = (e) => {
    this.props.addLike(this.props.toy.id, this.props.toy.likes)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLikeClick}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelClick}>Donate to GoodWill</button>
      </div>
    );
  }
}

export default ToyCard;
