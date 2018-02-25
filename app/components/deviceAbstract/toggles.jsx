import React, { Component } from 'react';

class toggles extends Component {

    constructor(props){
        super(props)
    };

    render() {
        return (
            <div className="toggles">
                <button className="turnOn">{this.props.name}</button>
                <button className="turnOff">{this.props.name}</button>
            </div>
        );
    }
}

export default toggles;
