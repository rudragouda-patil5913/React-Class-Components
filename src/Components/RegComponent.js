import React, { Component } from 'react';

class RegComponent extends Component {
    render() {
        console.log("Regular Component")
        return (
            <div>
                <h1>Regular {this.props.name}</h1>
            </div>
        );
    }
}

export default RegComponent;