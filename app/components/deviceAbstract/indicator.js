import React, { Component } from 'react';

class indicator extends Component {
    
    constructor(props){
        super(props);    
    };

    render() {        
        return (
            <div className="indicator" data-enabled={this.props.enabled}></div>
        );
    }
}

export default indicator;
