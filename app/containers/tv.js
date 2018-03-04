import React from 'react';
import {connect} from 'react-redux';
import {turnOn, turnOff, addDevice} from '../actions';
import Devices from '../components/deviceWrapper/index.jsx';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        devices: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        turnOn: (item) => {
            dispatch(turnOn(item))
        }
    }
}

const TvContainer = connect(mapStateToProps, mapDispatchToProps)(Devices)

export default TvContainer;