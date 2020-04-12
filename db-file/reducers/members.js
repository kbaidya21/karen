import { combineReducers } from 'redux';
import { createPending } from './common';


const members = (state=[], action) => {
    switch(action.type){
        case 'FETCH_MEMBERS_FULFILLED':
            return [ ...action.payload.data ]
        case 'ADD_MEMBERS_FULFILLED':
            return [ ...action.payload.data, ...state ]
        case 'REMOVE_MEMBER_FULFILLED':
            return state.filter(m => m.uuid !== action.meta.uuid)
        default:
            return state
    }
}

const invitations = (state=[], action) => {
    switch(action.type){
        case 'FETCH_INVITATIONS_FULFILLED':
            return [ ...action.payload.data ]
        case 'JOIN_INVITATION_FULFILLED':
            const inv = action.payload.data;
            return state.map(i => i.uuid === inv.uuid? inv : i)
        default:
            return state
    }
}

const pending = createPending([ 'FETCH_MEMBERS', 'FETCH_INVITATIONS' ])

const add_pending = createPending([ 'ADD_MEMBERS' ])

export default combineReducers({
    members, invitations, pending, add_pending
})

export const getMembers = (state) => state.members.members 
export const isPending = (state) => state.members.pending
export const isAddPending = (state) => state.members.add_pending
export const getInvitations = (state) => state.members.invitations