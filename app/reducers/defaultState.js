const defaultState = {
    devices: {
        tv: {
            items: [
                {
                    id: 'iddqd1',
                    type: 'tv',
                    settings: '123',
                    enabled: false
                },
                {
                    id: 'iddqd2',
                    type: 'tv',
                    settings: '1123',
                    enabled: true
                },
            ]
        },
        climate: {
            items: [
                {
                    id: 'iddqd12',
                    type: 'climate',
                    settings: '1231',
                    enabled: true
                },
            ]
        },
        light: {
            items: []
        }
    }
}

export default defaultState