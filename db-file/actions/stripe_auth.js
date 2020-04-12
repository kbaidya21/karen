import api from './api';
import axios from 'axios';
import { STRIPE_CALLBACK_URL } from '../constants';
import { getToken } from 'reducers/login';


export const connectStripe = (code) => (dispatch, getState) => {
    const token = getToken(getState());
    if (!token) return;

    if(code){
        const params = window.location.href
        return axios.get(STRIPE_CALLBACK_URL+'?'+params.split('?')[1], {
                            withCredentials: true,
                            headers: { Authorization: token }
                        })
    }
}

export const disconnectStripe = () => api.dispatch('STRIPE_DISCONNECT', 'delete', '/integrations/stripe/disconnect/')