const initialState = [
    [{text:'Enter a time when you would like to schedule a meeting. eg. 5 pm tomorrow', authorId:'karen'}]
]
const chat = (state=initialState, action) => {
    switch(action.type) {
        case 'NEW_MESSAGE':
            return [
                ...state,
                [{
                    text: action.text,
                    authorId: action.session,
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
