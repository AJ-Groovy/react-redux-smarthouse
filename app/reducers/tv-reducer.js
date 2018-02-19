import initialState from './initialState';

const tvReducer = (state = initialState.devices.tv, action) => {

    switch (action.type) {

        case 'TURN_ON': {
            return Object.assign({}, state, {
                items: state.items.map((tv) => {
                    console.log('a')
                    if (tv.id === action.id) {
                        return Object.assign({}, tv, {
                            settings: {
                                enabled: 'true'
                            }
                        })
                    }
                    return tv
                })
            })
        }

        case 'TURN_OFF': {
            return Object.assign({}, state, {
                items: state.items.map((tv) => {
                    if (tv.id === action.id) {
                        return { ...tv, enabled: 'false' }
                    }
                    return tv
                })
            })
        }

        case 'ADD_ITEM': {
            console.log('ha')
            return Object.assign({}, state, {
                items: {
                    ...state.items,

                }
            })
        }

        default: return state
    }
}

export default tvReducer