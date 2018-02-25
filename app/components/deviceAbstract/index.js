import React, { Component } from 'react'; 
import Indicator from './indicator'; 
import Toggles from './toggles'; 

class Device extends Component {
    

    render() {
        return (
            <div>
                <Indicator enabled="true"/>        
                <Toggles />        
            </div>
        );
    }
}

export default Device;