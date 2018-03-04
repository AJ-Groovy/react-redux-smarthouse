import React, { Component } from 'react'; 
import Indicator from './indicator.jsx'; 
import Toggles from './toggles.jsx'; 
import TvBody from '../tv/tvBody.jsx'; 

class Device extends Component {    
    render() {
        return (
            <div className="device">
                <Indicator enabled={this.props.enabled}/>        
                <TvBody />        
                <Toggles />        
            </div>
        );
    }
}

export default Device;