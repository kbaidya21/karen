import api from './api';
import axios from 'axios';
import { SLACK_CALLBACK_URL } from '../constants';
import { getToken } from 'reducers/login';


export const connectSlack = (code) => (dispatch, getState) => {
    const token = getToken(getState());
    if (!token) return;

    if(code){
        const params = window.location.href
        return axios.get(SLACK_CALLBACK_URL+'?'+params.split('?')[1], {
                            withCredentials: true,
                            headers: { Authorization: token }
                        })
    }
}

export const disconnectSlack = () => api.dispatch('SLACK_DISCONNECT', 'delete', '/integrations/slack/disconnect/')