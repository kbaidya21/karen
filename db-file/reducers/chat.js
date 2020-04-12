const initialState = [
    // [{text:'to schedule : schedule a meeting with user@example.com at 5 pm tomorrow', authorId:'karen'}]
]
const chat = (state=initialState, action) => {
    switch(action.type) {
        case 'NEW_MESSAGE':
            // if
            return [
                ...state,
                [{
                    text: action.text,
                    authorId: 'author',
                    timestamp: Date.now(),
                }]
            ]
        case 'SEND_MESSAGE_FULFILLED':
            return [
                ...state,
                [{
                    authorId: 'karen',
                    text: action.payload.data.text,
                    timestamp: Date.now(),
                }]
            ];
        case 'CLEAR_CHAT':
            return initialState
        default:
            return state;
    }
}


export default chat;
