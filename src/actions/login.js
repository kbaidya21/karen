import axios from 'axios';
import {
  FETCH_USER_URL,
  UPDATE_USER_URL,
  // KAREN_URL,
  LOGIN_AUTH_URL,
  SIGNUP_AUTH_URL,
  LOGIN_AUTH_CALLBACK_URL,
  SIGNUP_AUTH_CALLBACK_URL,
  VALIDATE_USERNAME_URL,
} from '../constants';
import {getToken} from '../reducers/login';
import OnBoarding from '../screens/OnBoarding';

export const getTimeZone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;
export const getTimeZoneOffset = () => {
  var dt = new Date();
  var offSet = dt.getTimezoneOffset();
  return offSet;
};
export const fetchUser = () => (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);
  if (!token) return;

  dispatch({
    type: 'FETCH_USER',
    payload: axios.get(FETCH_USER_URL, {headers: {Authorization: token}}),
  });
};

export const updateUser = (data) => (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);
  if (!token) return;

  return dispatch({
    type: 'UPDATE_USER',
    payload: axios.patch(
      UPDATE_USER_URL,
      {...data},
      {headers: {Authorization: token}},
    ),
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch({type: 'LOGOUT_USER'});
  // window.location.assign(KAREN_URL)
};

export const toLoginURL = (email) => {
  axios
    .get(`https://devapi.karenapp.io/accounts/login-oauth2url/` + email)
    .then((resp) => {
      window.location.assign(resp.data.url);
    })
    .catch((err) => {});
};

export const toSignupURL = (email) => {
  axios
    .get(SIGNUP_AUTH_URL + email)
    .then((resp) => {
      window.location.assign(resp.data.url);
    })
    .catch((err) => {});
};

export const loginCallback = (history, signup = false) => (
  dispatch,
  getState,
) => {
  const params = window.location.href;
  const state = getState();

  const URL = signup ? SIGNUP_AUTH_CALLBACK_URL : LOGIN_AUTH_CALLBACK_URL;
  if (!state.login.requested) {
    dispatch({type: 'LOGIN_REQUESTED', requested: true});
    return axios
      .get(
        URL + '?' + params.split('?')[1] + '&timeZone=' + getTimeZoneOffset(),
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        dispatch({type: 'LOGIN_USER_FULFILLED', data: response.data});
        dispatch({type: 'LOGIN_REQUESTED', requested: false});
        fetchAll(dispatch, getState);
        if (signup) history.push('/OnBoarding');
        else history.push('/OnBoarding');
      })
      .catch((err) => {
        window.location.assign(signup ? '/signup' : '/login');
      });
  }
};

export const validateUsername = (username) => (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);
  if (!token) return;

  return dispatch({
    type: 'VALIDATE_USERNAME',
    payload: axios.get(VALIDATE_USERNAME_URL + username + '/', {
      headers: {Authorization: token},
    }),
  });
};
