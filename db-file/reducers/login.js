import { combineReducers } from 'redux';
import { saveState } from '../localStorage';


const token = (state=null, action) => {
    switch(action.type){
        case 'LOGIN_USER_FULFILLED':
            saveState({ login: { token: "Token "+action.data.key }});
            document.cookie = "token="+action.data.key+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            return "Token "+action.data.key
        case 'LOGOUT_USER':
        case 'FETCH_USER_REJECTED':
            saveState({ login: { token: null } })
            document.cookie = "token=none; expires=Fri, 31 Dec 1970 23:59:59 GMT";
            return null
        default:
            return state
    }
}

const user = (state=null, action) => {
    switch(action.type){
        case 'FETCH_USER_FULFILLED':
        case 'UPDATE_USER_FULFILLED':
        case 'ZOOM_DISCONNECT_FULFILLED':
        case 'STRIPE_DISCONNECT_FULFILLED':
        case 'SLACK_DISCONNECT_FULFILLED':
            return { ...action.payload.data }
        case 'LOGOUT_USER':
        case 'FETCH_USER_REJECTED':
            return null
        default:
            return state
    }
}

const valid_name = (state=false, action) => {
    switch(action.type){
        case 'VALIDATE_USERNAME_FULFILLED':
            return action.payload.data
        case 'VALIDATE_USERNAME_PENDING':
            return false
        default:
            return state
    }
}

const requested = (state=false, action) => (action.type === 'LOGIN_REQUESTED'? action.requested : state)


export default combineReducers({ user, token, requested, valid_name })

export const getToken = (state) => state.login.token

export const getUser = (state) => state.login.user

export const getValidUsername = (state) => state.login.valid_name

export const isPremiumUser = (state) => {
    let user = getUser(state)
    return user && user.is_premium_user
}