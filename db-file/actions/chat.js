import axios from 'axios';
import { CHAT_URL } from '../constants';
import { getToken } from 'reducers/login';
import { fetchMeeting } from './meeting';
import { checkChatLimit } from '../rateLimits';

export const onMessageSend = (data, session) => (dispatch, getState) => {
    dispatch({ type: 'NEW_MESSAGE', text:data.text })
    const state = getState()
    const token = getToken(state);
    // if (!token) return;

    let limit_text = checkChatLimit()
    if(limit_text){
        return dispatch({
            type: 'SEND_MESSAGE',
            payload: new Promise((resolve) => setTimeout(()=>resolve({
                data: { text: limit_text }
            }), 500))
        })
    }

    return dispatch({
        type: 'SEND_MESSAGE',
        payload: axios.post(CHAT_URL, { ...data, session }, { headers: { Authorization: token }})
    }).then(resp => {
        if(resp.action.payload.data.meeting_created){
            fetchMeeting()(dispatch, getState)
        }
        return resp
    })
}

export const clearChat = () => ({
    type: "CLEAR_CHAT"
})