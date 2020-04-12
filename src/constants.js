export const DEBUG = true;
const DEV = true;

const LOCAL_BURL = 'http://localhost:8000';
const DEV_BURL = 'https://devapi.karenapp.io';
const PROD_BURL = 'https://api.karenapp.io';
export const BASE_URL = DEV ? DEV_BURL : DEBUG ? LOCAL_BURL : PROD_BURL;

const LOCAL_FURL = 'http://localhost:3000';
const DEV_FURL = 'https://dev.karenapp.io';
const PROD_FURL = 'https://karenapp.io';
export const KAREN_URL = DEV ? DEV_FURL : DEBUG ? LOCAL_FURL : PROD_FURL;

console.log(BASE_URL, KAREN_URL);

export const LOGIN_AUTH_URL = BASE_URL + '/accounts/login-oauth2url/';
export const SIGNUP_AUTH_URL = BASE_URL + '/accounts/signup-oauth2url/';
export const LOGIN_AUTH_CALLBACK_URL =
  BASE_URL + '/accounts/login-oauth2callback/';
export const SIGNUP_AUTH_CALLBACK_URL =
  BASE_URL + '/accounts/signup-oauth2callback/';
