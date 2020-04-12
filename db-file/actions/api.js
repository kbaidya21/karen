import axios from 'axios';
import { BASE_URL } from '../constants';
import { getToken } from 'reducers/login';

class Api {
    constructor(base_url){
        this.base_url = base_url
    }

    fullURL = (url_path) => (url_path.startsWith('http')? url_path: `${this.base_url}${url_path}`)

    getAuthHeaders = (token) => token && ({ headers: { Authorization: token }})

    get = (url_path, token) => axios.get(this.fullURL(url_path), this.getAuthHeaders(token))

    post = (url_path, data, token) => axios.post(this.fullURL(url_path), data, this.getAuthHeaders(token))

    patch = (url_path, data, token) => axios.patch(this.fullURL(url_path), data, this.getAuthHeaders(token))

    delete = (url_path, token) => axios.delete(this.fullURL(url_path), this.getAuthHeaders(token))

    getPayload = (method, url_path, data, token) => {
        switch(method){
            case 'post': return this.post(url_path, data, token)
            case 'get': return this.get(url_path, token)
            case 'delete': return this.delete(url_path, token)
            case 'patch': return this.patch(url_path, data, token)
            default: return null
        }
    }

    dispatch = (type, method, url_path, data, meta, auth=true) => (dispatch, getState) => {
        const token = getToken(getState());
        if (auth && !token) return;

        let payload = this.getPayload(method, url_path, data, token)
        if(payload){
            return dispatch({ type, payload, meta })
        }
    }

    request = (method, url_path, data) => (dispatch, getState) => {
        const token = getToken(getState());
        return this.getPayload(method, url_path, data, token)
    }
}

const api = new Api(BASE_URL)

export default api