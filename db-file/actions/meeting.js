import axios from 'axios';
import { FETCH_MEETING_URL, UPDATE_MEETING_URL, ATTENDEE_FEEDBACK_URL } from '../constants';
import { getToken } from 'reducers/login';


export const fetchMeeting = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_MEETING',
        payload: axios.get(FETCH_MEETING_URL, { headers: { Authorization: token }})
    })
}


export const updateMeeting = (data) => (dispatch, getState) => {
    // const state = getState()
    // const token = getToken(state);

    let message = null;
    if(data.status === 'CANCELLED'){
        message = "Meeting cancelled successfully"
    } else if(data.status === 'ADD_NOTE'){
        message = "Notes Saved"
    } else if(data.status === 'DELETE_NOTE'){
        message = "Notes Deleted"
    } else {
        message = "Meeting rescheduled"
    }
    return dispatch({
        type: 'UPDATE_MEETING',
        meta: { successMessage:message },
        payload: axios.post(UPDATE_MEETING_URL, { ...data })
    })
}

export const updateSelfMeeting = (data) => axios.post(UPDATE_MEETING_URL, data)

export const sendFeedback = (uuid, feedback) => axios.post(ATTENDEE_FEEDBACK_URL+uuid, { feedback })
