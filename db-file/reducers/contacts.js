import { combineReducers } from 'redux';

const contacts = (state=[], action) => {
    switch(action.type){
        case 'FETCH_CONTACT_FULFILLED':
            return [ ...action.payload.data ]
        case 'UPDATE_CONTACT_FULFILLED':
            let contact = action.payload.data
            return state.map(c => c.uuid === contact.uuid? contact : c)
        case 'DELETE_CONTACT_FULFILLED':
            return state.filter(c => c.uuid !== action.meta.uuid)
        default:
            return state
    }
}

const meetings = (state=[], action) => {
    switch(action.type){
        case 'FETCH_CONTACT_MEETINGS_FULFILLED':
            return [ ...action.payload.data ]
        default:
            return state
    }
}

const pending = (state=false, action) => {
    switch(action.type){
        case 'FETCH_CONTACT_MEETINGS_FULFILLED':
        case 'FETCH_CONTACT_MEETINGS_REJECTED':
            return false
        case 'FETCH_CONTACT_MEETINGS_PENDING':
            return true
        default:
            return state
    }
}

export default combineReducers({ contacts, meetings, pending });


export const getContacts = (state) => state.contacts.contacts;

export const getMeetings = (state) => state.contacts.meetings;

export const isPending = (state) => state.contacts.pending;

export const getContact = (state, email) => {
    for(let c of getContacts(state)){
        if(c.email === email){
            return c
        }
    }
    return null
}