import React, { Component } from "react";
// import "./style.css";

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    }
  }

  render() {
    return (
      <div
        className="card"
        onClick={this.props.clickHandler}
      >
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
