import React from 'react';

class indicator extends React.Component {
        render() {        
        return (
            <div className="indicator" data-enabled={this.props.enabled}></div>
        );
    }
}

export default indicator;
