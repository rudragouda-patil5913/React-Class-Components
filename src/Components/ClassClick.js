import React, { Component } from 'react';

class ClassClick extends Component {

    handleChange(){
        console.log("class component click")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleChange}>Class btn event handler</button>
            </div>
        );
    }
}

export default ClassClick;