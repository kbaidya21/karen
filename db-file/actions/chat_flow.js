import axios from 'axios';
import { getToken } from 'reducers/login';
import { fetchMeeting } from './meeting';
import { SUBMIT_ACTION_URL } from '../constants';


export const submitAction = (data) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return dispatch({
        type: 'SUBMIT_ACTION',
        payload: axios.post(SUBMIT_ACTION_URL, data , { headers: { Authorization: token }})
    }).then(resp => {
        if(resp.action.payload.data.meeting_created){
            fetchMeeting()(dispatch, getState)
        }
        return resp
    })
}