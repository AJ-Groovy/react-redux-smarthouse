export const turnOn = (item) => {
    return {
        type: 'TURN_ON',
        id: item.id
    }
}

export const turnOff = (item) => {
    return {
        type: 'TURN_OFF',
        id: item.id
    }
}

export const addDevice = (item) => {
    return {
        type: 'ADD_DEVICE',
        payload: {
            id: item.id,
            type: item.type,
            settings: item.settings
        }
    }
}