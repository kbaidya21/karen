import axios from 'axios';
import { FETCH_QUERY_URL, QUERY_ANSWER_URL } from '../constants';
import { getToken } from 'reducers/login';


export const fetchQuery = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_QUERY',
        payload: axios.get(FETCH_QUERY_URL, { headers: { Authorization: token }})
    })
}


export const answerQuery = (uuid, answer) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'QUERY_ANSWER',
        payload: axios.post(QUERY_ANSWER_URL, { uuid, answer }, { headers: { Authorization: token }})
    })
}