import axios from 'axios';
import { FETCH_MESSAGE_URL, MESSAGE_REPLY_URL } from '../constants';
import { getToken } from 'reducers/login';


export const fetchMessage = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_MESSAGE',
        payload: axios.get(FETCH_MESSAGE_URL, { headers: { Authorization: token }})
    })
}


export const submitReply = (uuid, message) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'MESSAGE_REPLY',
        payload: axios.post(MESSAGE_REPLY_URL, {uuid, message}, { headers: { Authorization: token }})
    })
}
