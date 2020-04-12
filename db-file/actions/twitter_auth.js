import axios from 'axios';
import { TWITTER_OAUTH_URL, TWITTER_CALLBACK_URL } from '../constants';
// import { browserHistory } from 'react-router';
// import {loginSuccess, loginRequest} from './auth_actions';
// import { GET_USER, USER_URL } from '../constants/global';
import { getToken } from 'reducers/login';

export const onTwitterAuth = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return axios.get(TWITTER_OAUTH_URL, {
        withCredentials: true,
        headers: { Authorization: token }
    })
    .then(response => {
        window.location.assign(response.data.auth_url)
    })
}


export const onTwitterCallback = () => (dispatch, getState) => {
    const params = window.location.href
    const state = getState()
    if(!state.twitter_auth){
        dispatch({ type: 'TWITTER_AUTH', requested: true })
        return axios.get(TWITTER_CALLBACK_URL+'?'+params.split('?')[1], {
                withCredentials: true
            })
            .then(response => {
                dispatch({ type: 'FETCH_USER_FULFILLED', data: response.data })
                dispatch({ type: 'TWITTER_AUTH', requested: false })
                window.location.assign('/dashboard')
            })
            .catch(err => {
                dispatch({ type: 'TWITTER_AUTH', requested: false })
                window.location.assign('/dashboard')
            })
    }
}