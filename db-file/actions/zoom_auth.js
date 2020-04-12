import axios from 'axios';
import { ZOOM_CALLBACK_URL, ZOOM_DISCONNECT_URL } from '../constants';
import { getToken } from 'reducers/login';

// export const onTwitterAuth = () => (dispatch, getState) => {
//     const state = getState()
//     const token = getToken(state);
//     if (!token) return;

//     return axios.get(TWITTER_OAUTH_URL, {
//         withCredentials: true,
//         headers: { Authorization: token }
//     })
//     .then(response => {
//         window.location.assign(response.data.auth_url)
//     })
// }


export const onZoomCallback = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    if(!state.twitter_auth){
        dispatch({ type: 'TWITTER_AUTH', requested: true })
        const params = window.location.href
        return axios.get(ZOOM_CALLBACK_URL+'?'+params.split('?')[1], {
                withCredentials: true,
                headers: { Authorization: token }
            })
            .then(response => {
                dispatch({ type: 'FETCH_USER_FULFILLED', payload: {data: response.data }})
                dispatch({ type: 'ZOOM_USER_FULFILLED' })
                dispatch({ type: 'TWITTER_AUTH', requested: false })
            })
            .catch(err => {
                dispatch({ type: 'TWITTER_AUTH', requested: false })
                dispatch({ type: 'ZOOM_USER_REJECTED' })
            })
    }
}

export const disconnectZoom = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return dispatch({
        type: 'ZOOM_DISCONNECT',
        payload: axios.delete(ZOOM_DISCONNECT_URL, {headers: { Authorization: token }}),
    })
}