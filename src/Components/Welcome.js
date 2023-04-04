import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                
                <h1>{this.props.name} {this.props.surname} </h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Welcome;