import axios from 'axios';
import { RESCHEDULE_CHAT_URL, GET_MEETING_UUID_URL, ANON_MEETING_RESCHEDULE_URL } from '../constants';

export const onMessageSend = (text, uuid, session) => (dispatch) => {
    dispatch({ type: 'RE_NEW_MESSAGE', text, session })
    return dispatch({
        type: 'RE_SEND_MESSAGE',
        payload: axios.post(RESCHEDULE_CHAT_URL, { text:text.toLowerCase(), uuid, session })
    })
}

export const getMeeting = (uuid) => (dispatch) => {
    return dispatch({
        type: 'RETRIEVE_MEETING',
        payload: axios.get(GET_MEETING_UUID_URL + uuid)
    })
}

export const getMeetingRequest = (uuid) => {
    return axios.get(GET_MEETING_UUID_URL + uuid)
}

export const rescheduleAnonMeeting = (data) => {
    return axios.post(ANON_MEETING_RESCHEDULE_URL, data)
}