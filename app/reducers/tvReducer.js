import defaultState from './defaultState';

const tvReducer = (state = defaultState.devices.tv, action) => {
    switch (action.type) {

        case 'TURN_ON':
            return Object.assign({}, state, {
                items: state.items.map((tv) => {
                    if (tv.id === action.id) {
                        return Object.assign({}, tv, {
                            settings: {
                                enabled: 'true'
                            }
                        })
                    } else return state
                })
            });

        case 'TURN_OFF':
            return Object.assign({}, state, {
                items: state.items.map((tv) => {
                    if (tv.id === action.id) {
                        return Object.assign({}, tv, {
                            settings: {
                                enabled: 'false'
                            }
                        })
                    } else return state
                })
            });

        case 'ADD_DEVICE':
            if (action.payload.type === 'tv') {
                return Object.assign({}, state, {
                    items: [...state.items, action.payload]
                });
            } else return state

        default:
            return state
    }
}
export default tvReducer