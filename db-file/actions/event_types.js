import axios from 'axios';
import { MEETING_TYPE_URL } from '../constants';
import { getToken } from 'reducers/login';


export const createOneOnOneMeeting = (data) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return dispatch({
        type: 'CREATE_ONE_ON_ONE',
        payload: axios.post(
            MEETING_TYPE_URL + 'one-on-one/',
            data,
            { headers: { Authorization: token } }
        )
    })
}


export const createGroupMeeting = (data) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return dispatch({
        type: 'CREATE_GROUP_EVENT',
        payload: axios.post(
            MEETING_TYPE_URL + 'group-event/',
            data,
            { headers: { Authorization: token } }
        )
    })
}

export const fetchOneOnOneMeeting = () => (dispatch, getState) => {

    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return dispatch({
        type: 'FETCH_ONEONONE',
        payload: axios.get(
            MEETING_TYPE_URL + 'one-on-one/',
            { headers: { Authorization: token } }
        )
    })
}

export const fetchGroupEvent = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return dispatch({
        type: 'FETCH_GROUP_EVENT',
        payload: axios.get(
            MEETING_TYPE_URL + 'group-event/',
            { headers: { Authorization: token } }
        )
    })
}

// toggle, edit, delete

export const deleteMeeting = (uuid, group) => (dispatch, getState) => {

    const state = getState()
    const token = getToken(state);
    if (!token) return;

    const URL = MEETING_TYPE_URL + (group ? 'group-event/' : 'one-on-one/') + uuid + '/'

    return dispatch({
        type: 'DELETE_'+(group? 'GROUP_EVENT' : 'ONEONONE'),
        payload: axios.delete(URL, { headers: { Authorization: token } }),
        meta: { uuid }
    })
}


export const editMeeting = (uuid, data, group) => (dispatch, getState) => {

    const state = getState()
    const token = getToken(state);
    if (!token) return;

    const URL = MEETING_TYPE_URL + (group ? 'group-event/' : 'one-on-one/') + uuid + '/'

    return dispatch({
        type: 'UPDATE_'+(group? 'GROUP_EVENT' : 'ONEONONE'),
        payload: axios.patch(URL, data, { headers: { Authorization: token } })
    })
}


export const validateEventLink = (link) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return axios.get(
        MEETING_TYPE_URL + 'validate-link/' + link + '/',
        { headers: { Authorization: token } }
    )
}

export const getUserPublicEvents = (username) => {
    return axios.get(`${MEETING_TYPE_URL}events/${username}/`)
}