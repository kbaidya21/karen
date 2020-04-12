import { combineReducers } from 'redux';

const chat = (state = [], action) => {
    switch(action.type) {
        case 'RE_NEW_MESSAGE':
            return [
                ...state,
                [{
                    text: action.text,
                    authorId: action.session,
                    timestamp: Date.now(),
                }]
            ]
        case 'RE_SEND_MESSAGE_FULFILLED':
            return [
                ...state,
                [{
                    authorId: 'karen',
                    text: action.payload.data.text,
                    timestamp: Date.now(),
                }]
            ];
        case 'RETRIEVE_MEETING_FULFILLED':
            const m = action.payload.data
            return [
                ...state,
                [{
                    authorId: 'karen',
                    text: "The meeting is scheduled at "+m.formatted_time+", what time would you want to reschedule at?",
                    timestamp: Date.now()
                }]
            ]
        default:
            return state;
    }
}

const meeting = (state=null, action) => {
    switch(action.type) {
        case 'RETRIEVE_MEETING_FULFILLED':
            return { ...action.payload.data };
        default:
            return state;
    }
}

const pending = (state=false, action) => {
    switch(action.type) {
        case 'RETRIEVE_MEETING_PENDING':
            return true
        case 'RETRIEVE_MEETING_FULFILLED':
        case 'RETRIEVE_MEETING_REJECTED':
            return false
        default:
            return state
    }
}

export default combineReducers({ chat, meeting, pending });
