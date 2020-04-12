import axios from 'axios';
import {
    FETCH_DAILY_MEETINGS_URL,
    FETCH_DAILY_ANSWERS_URL,
    FETCH_DAILY_QUERIES_URL
} from '../constants';
import { getToken } from 'reducers/login';


export const fetchStats = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    fetchDailyMeetings()(dispatch, getState);
    fetchDailyAnswers()(dispatch, getState);
    fetchDailyQueries()(dispatch, getState);
}

export const fetchDailyMeetings = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_DAILY_MEETINGS',
        payload: axios.get(FETCH_DAILY_MEETINGS_URL, { headers: { Authorization: token }})
    })
}


export const fetchDailyAnswers = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_DAILY_ANSWERS',
        payload: axios.get(FETCH_DAILY_ANSWERS_URL, { headers: { Authorization: token }})
    })
}


export const fetchDailyQueries = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_DAILY_QUERIES',
        payload: axios.get(FETCH_DAILY_QUERIES_URL, { headers: { Authorization: token }})
    })
}
