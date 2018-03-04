import React, { Component } from 'react';
import Device from '../deviceAbstract';

class DeviceWrapper extends Component {
    
    constructor(props){
        super(props);
    };

    render() {
        let devices = this.props.devices.tv.items.map((device) => 
            <Device
                key={device.id}
                enabled={device.enabled}
            />);
        return (
            <ul className="devices">
                {devices}
            </ul>
        );
    }
}

export default DeviceWrapper;
