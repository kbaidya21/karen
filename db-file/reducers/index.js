import { combineReducers } from 'redux';
import login from './login';
import meeting from './meeting';
import message from './message';
import query from './query';
import stats from './stats';
import chat from './chat';
import user_chat from './user_chat';
import notifications from './notifications';
import header_notifications from './header_notifications'
import reschedule from './reschedule';
import meeting_types from './meeting_types';
import contacts from './contacts';
import chat_flow from './chat_flow';
import billing, { stripeApiKey } from './billing';
import teams from './teams';
import members from './members';
import public_team from './public_team';

const twitter_auth = (state=false, action) => (action.type === 'TWITTER_AUTH'? action.requested : state)

const rootReducer = combineReducers({
    login,
    meeting,
    message,
    query,
    stats,
    chat,
    twitter_auth,
    notifications,
    header_notifications,
    reschedule,
    user_chat,
    meeting_types,
    contacts,
    chat_flow,
    billing,
    teams,
    members,
    stripeApiKey,
    public_team
})

export default rootReducer;
