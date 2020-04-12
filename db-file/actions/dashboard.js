import { fetchUser } from './login';
// import { fetchMeeting } from './meeting';
// import { fetchMessage } from './message';
// import { fetchQuery } from './query';
import { fetchOneOnOneMeeting, fetchGroupEvent } from './event_types'
// import { fetchStats } from './stats';
import { fetchStripeApiKey, getSubscription } from './billing';
import { fetchMembers } from './members';
import api from './api';

export const fetchAll = () => (dispatch, getState) => {
    fetchUser()(dispatch, getState)
    // fetchMeeting()(dispatch, getState)
    fetchOneOnOneMeeting()(dispatch, getState)
    fetchGroupEvent()(dispatch, getState)
    fetchStripeApiKey()(dispatch, getState)
    fetchMembers()(dispatch, getState)
    getSubscription()(dispatch, getState)
}

export const fetchFilteredDashboardMeetings = (url, meta) =>
    api.dispatch('FETCH_MEETING', 'get', (url || '/appointments/meetings/'), null, meta)
