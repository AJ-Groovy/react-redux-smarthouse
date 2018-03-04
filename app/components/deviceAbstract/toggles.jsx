import React, { Component } from 'react';

class toggles extends Component {
    render() {
        return (
            <div className="toggles">
                <button className="turnOn">On</button>
                <button className="turnOff">Off</button>
            </div>
        );
    }
}

export default toggles;
