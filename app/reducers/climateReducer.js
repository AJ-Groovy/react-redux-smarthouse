// import { turnOn, turnOff, addDevice } from './actions';
import defaultState from './defaultState';

const climateReducer = (state = defaultState.devices.climate, action) => {
    switch (action.type) {
        // case 'TURN_ON':
        //     return Object.assign({}, state, {
        //         items: state.items.map((tv) => {
        //             if (tv.id === action.id) {
        //                 return Object.assign({}, tv, {
        //                     enabled: 'true'
        //                 })
        //             }
        //             else return state
        //         })
        //     });

        // case 'TURN_OFF':
        //     return Object.assign({}, state, {
        //         items: state.items.map((tv) => {
        //             if (tv.id === action.id) {
        //                 return Object.assign({}, tv, {
        //                     enabled: 'false'
        //                 })
        //             }
        //             else return state
        //         })
        //     });

        case 'ADD_DEVICE':
            if (action.payload.type === 'climate') {
                return Object.assign({}, state, {
                    items: [...state.items, action.payload]
                });
            } else return state

        default: return state
    }
}
export default climateReducer