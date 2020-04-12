import { combineReducers } from 'redux';


const pending = (state=false, action) => {
    switch(action.type){
        case 'SUBMIT_ACTION_PENDING':
            return true
        case 'SUBMIT_ACTION_FULFILLED':
        case 'SUBMIT_ACTION_REJECTED':
            return false
        default:
            return state
    }
}

export default combineReducers({ pending })

export const isPending = (state) => state.chat_flow.pending