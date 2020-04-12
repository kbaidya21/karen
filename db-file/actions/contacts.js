import axios from 'axios';
import { CONTACT_URL } from '../constants';
import { getToken } from 'reducers/login';


export const fetchContact = () => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_CONTACT',
        payload: axios.get(CONTACT_URL+'contact/', { headers: { Authorization: token }})
    })
}

export const deleteContact = (uuid) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'DELETE_CONTACT',
        payload: axios.delete(CONTACT_URL+'contact/'+uuid+'/', { headers: { Authorization: token }}),
        meta: { uuid }
    })
}

export const updateContact = (uuid, data) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'UPDATE_CONTACT',
        payload: axios.patch(CONTACT_URL+'contact/'+uuid+'/', data, { headers: { Authorization: token }}),
        meta: { uuid }
    })
}


export const fetchContactMeetings = (uuid) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    dispatch({
        type: 'FETCH_CONTACT_MEETINGS',
        payload: axios.get(CONTACT_URL+'meetings/'+uuid+'/', { headers: { Authorization: token }})
    })
}