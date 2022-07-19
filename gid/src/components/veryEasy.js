import React, { Component } from 'react';

 class PersonInfo extends Component {
  render () {
    return (
      <div>
          <h1>{this.props.name}</h1>
          <h1>{this.props.age}</h1>
          <h1>{this.props.dateOfBirth}</h1>
          <h1>{this.props.number}</h1>
          <h1>{this.props.email}</h1>
      </div>
    );
  }
}
export default PersonInfo;