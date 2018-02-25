import React from 'react';

class indicator extends React.Component {
    
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
