import defaultState from './defaultState';

const deviceReducer = (state = defaultState.devices, action) => {
    switch (action.type) {

        case 'TURN_ON':
            return Object.assign({}, state, {
                items: state.items.map((device) => {
                    if (device.id === action.id) {
                        return Object.assign({}, device, {
                            settings: {
                                enabled: 'true'
                            }
                        })
                    } else return state
                })
            });

        case 'TURN_OFF':
            return Object.assign({}, state, {
                items: state.items.map((device) => {
                    if (device.id === action.id) {
                        return Object.assign({}, device, {
                            settings: {
                                enabled: 'false'
                            }
                        })
                    } else return state
                })
            });

        case 'ADD_DEVICE':
            return Object.assign({}, state, {
                items: [...state.items, action.payload]
            });

        default:
            return state
    }
}
export default deviceReducer