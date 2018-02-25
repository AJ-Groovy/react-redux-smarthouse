import React from 'react';
import {connect} from 'react-redux';
import {turnOn, turnOff, addDevice} from '../actions';
import TV from '../components/deviceAbstract';

const mapStateToProps = (state) => {
    return {
        tv: state.tv
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        turnOn: (item) => {
            dispatch(turnOn(item))
        }
    }
}

const TvContainer = connect(mapStateToProps, mapDispatchToProps)(TV)

export default TvContainer;