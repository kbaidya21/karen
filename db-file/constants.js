export const DEBUG = true
const DEV = true

const LOCAL_BURL = 'http://localhost:8000'
const DEV_BURL = 'https://devapi.karenapp.io'
const PROD_BURL = 'https://api.karenapp.io'
export const BASE_URL = (DEV? DEV_BURL : (DEBUG? LOCAL_BURL : PROD_BURL))


const LOCAL_FURL = 'http://localhost:3000'
const DEV_FURL = 'https://dev.karenapp.io'
const PROD_FURL = 'https://karenapp.io'
export const KAREN_URL = (DEV? DEV_FURL : (DEBUG? LOCAL_FURL : PROD_FURL))

console.log(BASE_URL, KAREN_URL)

export const FETCH_MEETING_URL = BASE_URL + '/appointments/meetings/'
export const FETCH_MESSAGE_URL = BASE_URL + '/msg/messages/'
export const FETCH_QUERY_URL = BASE_URL + '/qna/queries/'
export const CONTACT_URL = BASE_URL + '/contacts/'

export const FETCH_DAILY_MEETINGS_URL = BASE_URL + '/stats/daily_meetings/'
export const FETCH_DAILY_ANSWERS_URL = BASE_URL + '/stats/daily_answers/'
export const FETCH_DAILY_QUERIES_URL = BASE_URL + '/stats/daily_queries/'

export const FETCH_USER_URL = BASE_URL + '/accounts/me/'
export const UPDATE_USER_URL = BASE_URL + '/accounts/me/'
export const VALIDATE_USER_URL = BASE_URL  + '/accounts/validate/'
export const VALIDATE_USERNAME_URL = BASE_URL + '/accounts/name/'

export const CHAT_URL = BASE_URL + '/appointments/chat/'

export const ANON_CHAT_URL = BASE_URL + '/anonchat/chat/'
export const RESCHEDULE_CHAT_URL = BASE_URL + '/anonchat/reschedule/'
export const ANON_MEETING_CREATE_URL = BASE_URL + '/anonchat/create-meeting/'
export const ANON_MEETING_RESCHEDULE_URL = BASE_URL + '/anonchat/reschedule-meeting/'
export const SINGLE_MEETING_URL = BASE_URL + '/anonchat/single-event/'
export const GROUP_MEETING_URL = BASE_URL + '/anonchat/group-event/'

export const SUBMIT_DATA_URL = BASE_URL + '/usermeta/'
export const UPDATE_MEETING_URL = BASE_URL + '/appointments/update/'
export const GET_MEETING_UUID_URL = BASE_URL + '/appointments/meetings/'
export const SUBMIT_ACTION_URL = BASE_URL + '/appointments/submit_action/'
export const ATTENDEE_FEEDBACK_URL = BASE_URL + '/appointments/feedback/'
export const MESSAGE_REPLY_URL = BASE_URL + '/msg/reply/'
export const QUERY_ANSWER_URL = BASE_URL + '/qna/answer/'

export const MEETING_TYPE_URL = BASE_URL + '/meetingtypes/'

// removed twitter auth urls
export const CB_URL = window.location.origin + '/twitter-callback/'
export const TWITTER_OAUTH_URL = BASE_URL + '/accounts/twitter/auth/?cb_url=' + CB_URL
export const TWITTER_CALLBACK_URL = BASE_URL + '/accounts/twitter/callback/'


export const NOTIFICATION_URL = BASE_URL + '/accounts/notifications/'



export const LOGIN_AUTH_URL = BASE_URL + '/accounts/login-oauth2url/'
export const SIGNUP_AUTH_URL = BASE_URL + '/accounts/signup-oauth2url/'
export const LOGIN_AUTH_CALLBACK_URL = BASE_URL + '/accounts/login-oauth2callback/'
export const SIGNUP_AUTH_CALLBACK_URL = BASE_URL + '/accounts/signup-oauth2callback/'

export const RESOLVE_EMAIL_URL = BASE_URL + '/resolve-email/'

export const MESSAGES_PER_MINUTE = 20;
export const MESSAGES_PER_HOUR = 200;

const ZOOM_LOCAL_CID = '5dYocHCgSpOVvwjiGtOoRQ'
const ZOOM_DEV_CID = 'em2cOQ5FQQma3EcfFIieew'
const ZOOM_PROD_CID = '<prod_cid>'

export const ZOOM_CLIENT_ID = (DEV? ZOOM_DEV_CID : (DEBUG ? ZOOM_LOCAL_CID: ZOOM_PROD_CID))
export const ZOOM_REDIRECT_URI = window.location.origin +'/zoom-callback/'
export const ZOOM_CALLBACK_URL = BASE_URL + '/integrations/zoom/callback/'
export const ZOOM_DISCONNECT_URL = BASE_URL + '/integrations/zoom/disconnect/'

// stripe auth url with client id
// stripe auth url with client id
const STRIPE_LOCAL_CID = 'ca_FFIC4d72dWRo1boiwauGOp49IEnab7qW'
const STRIPE_DEV_CID = 'ca_FMl4GYWIwZEnMWpKVrfoZ766q4gGdgRN'
const STRIPE_PROD_CID = 'ca_FMl40Q5pbNkjmCCMGtBVVgFDUgLx8qt1'

const STRIPE_CLIENT_ID = (DEV? STRIPE_DEV_CID : (DEBUG? STRIPE_LOCAL_CID : STRIPE_PROD_CID))
export const STRIPE_ST_OAUTH_URL = `https://dashboard.stripe.com/oauth/authorize?response_type=code&client_id=${STRIPE_CLIENT_ID}&scope=read_write&stripe_landing=login`
export const STRIPE_EX_OAUTH_URL = `https://dashboard.stripe.com/express/oauth/authorize?response_type=code&client_id=${STRIPE_CLIENT_ID}&scope=read_write`
export const STRIPE_CALLBACK_URL = BASE_URL + '/integrations/stripe/callback/'

export const DOMAIN_USER_URL = (DEV? 'https://dev.karenapp.io/user': (DEBUG? window.location.origin+'/user' : 'https://karenapp.io'))
export const DOMAIN_TEAM_URL = (DEV? 'https://dev.karenapp.io/team': (DEBUG? window.location.origin+'/team' : 'https://karenapp.io/team'))

// slack
export const SLACK_CLIENT_ID = '760757340196.767393149591'
export const SLACK_CALLBACK_URL = BASE_URL + '/integrations/slack/oauth/'
