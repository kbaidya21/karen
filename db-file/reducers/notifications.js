import { combineReducers } from "redux";


export const errorMessage = (state = "", action) => {
    switch (action.type) {
        case 'FETCH_USER_REJECTED':
            return "Failed to get User"
        case 'UPDATE_MEETING_REJECTED':
            try{
                return action.payload.response.data.error || "Failed to update meeting"
            } catch (err){
                return "Failed to update meeting"
            }
        case 'CREATE_ONE_ON_ONE_REJECETED':
        case 'CREATE_GROUP_EVENT_REJECTED':
            return "Failed to create Event Type"
        case 'SUBMIT_ACTION_REJECTED':
            try{
                return action.payload.response.data.message || "Action failed"
            } catch (err){
                return "Action failed"
            }
        case 'ZOOM_DISCONNECT_REJECTED':
            return 'Failed to disconnect Zoom'
        case 'ZOOM_USER_REJECTED':
            return "Failed to connect with Zoom"
        case 'DELETE_CONTACT_REJECTED':
            return "Failed to delete contact"
        case 'UPDATE_CONTACT_REJECTED':
            return "Failed to update contact"
        case 'ADD_MEMBERS_REJECTED':
            return 'Failed to send Invitation'
        case 'HIDE_MESSAGE':
            return ''
        default:
            return state
    }
}

export const successMessage = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_USER_FULFILLED':
            return "Preferences Updated Successfully"
        case 'HIDE_MESSAGE':
            return ''
        case 'UPDATE_MEETING_FULFILLED':
            return action.meta.successMessage
        case 'CREATE_ONE_ON_ONE_FULFILLED':
        case 'CREATE_GROUP_EVENT_FULFILLED':
            return "Event type created successfully"
        case 'SUBMIT_ACTION_FULFILLED':
            return "Meeting created"
        case 'UPDATE_ONEONONE_FULFILLED':
        case 'UPDATE_GROUP_EVENT_FULFILLED':
            return "Event type updated"
        case 'DELETE_ONEONONE_FULFILLED':
        case 'DELETE_GROUP_EVENT_FULFILLED':
            return "Deleted meeting type"
        case 'ZOOM_DISCONNECT_FULFILLED':
            return "Disconnected with Zoom"
        case 'ZOOM_USER_FULFILLED':
            return "Connected with Zoom"
        case 'DELETE_CONTACT_FULFILLED':
            return "Contact deleted"
        case 'UPDATE_CONTACT_FULFILLED':
            return "Contact updated"
        case 'ADD_MEMBERS_FULFILLED':
            return "Invitation sent"
        default:
            return state
    }
}

export const infoMessage = (state = '', action) => {
    switch(action.type) {
        case 'LOGIN_USER_FULFILLED':
            // if(action.data.prompt_update_timezone) {
            //     return "Please update your TimeZone"
            // }
            return state
        case 'HIDE_MESSAGE':
            return ''
        default:
            return state
    }
}

export default combineReducers({
    errorMessage, successMessage, infoMessage
})
