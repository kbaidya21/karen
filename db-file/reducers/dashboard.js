import { getMeetings, getScroll } from 'reducers/meeting';
import { getMessages } from 'reducers/message';
import { getUser } from 'reducers/login';
import { getMembers } from 'reducers/members';

export const getDashboardData = (state) => {
    let meetings = getMeetings(state);
    let scroll = getScroll(state);
    let messages = getMessages(state);
    let user = getUser(state);
    let members = getMembers(state).filter(m => m.status === 'ACTIVE');

    return ({
        meetings,
        scroll,
        messages,
        members,
        user
    })
}