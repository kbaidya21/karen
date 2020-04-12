import axios from 'axios';
import { ANON_CHAT_URL, VALIDATE_USER_URL, VALIDATE_USERNAME_URL} from '../constants';
import { checkChatLimit } from '../rateLimits';

export const onMessageSend = (text, username, session, invitee_tz) => (dispatch) => {
    dispatch({ type: 'NEW_MESSAGE', text, session })

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
        // payload: axios.post(CHAT_URL + session + '/', { text:text.toLowerCase() })
        payload: axios.post(ANON_CHAT_URL, { text:text.toLowerCase(), username, session, invitee_tz })
    })
}

export const validateUserAndSite = (username) => {
    return axios.post(VALIDATE_USER_URL, { username, site: window.location.origin })
}

export const validateUsername = (username) => {
    return axios.get(VALIDATE_USERNAME_URL+username+'/')
}