const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl: 'hats',
            id: 1
        }, {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: '',
            id: 2
        }, {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl: '',
            id: 3
        }, {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            linkUrl: '',
            id: 4
        }, {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            linkUrl: '',
            id: 5
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default directoryReducer