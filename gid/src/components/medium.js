import React, { Component } from 'react';

class PersonInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            person: {        
                name: props.name,
                age: props.age,
                dateOfBirth: props.dateOfBirth,
                number: props.number,
                email: props.email}
        };
    }
    
    render() {
        return (
            <div className="person">
                <h1>{this.state.person.name}</h1>
                <p> Age: {this.state.person.age}</p>
                <p> DOB: {this.state.person.dateOfBirth}</p>
                <p> Phone Number: {this.state.person.number}</p>
                <p> Email: {this.state.person.email}</p>
            </div>
        );
    }
}

export default PersonInfo;