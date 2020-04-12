import axios from 'axios';
import { NOTIFACTION_URL } from '../constants';

import { getToken } from 'reducers/login';


export const fetchNotification = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_NOTIFICATION',
        payload: axios.get(NOTIFICATION_URL, { headers: { Authorization: token }})
    })
}

export const updateNotification = (uuid) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'UPDATE_NOTIFICATION',
        payload: axios.post(NOTIFICATION_URL, { uuid }, { headers: { Authorization: token }})
    })
}
