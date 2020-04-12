import axios from 'axios';
import { MEETING_TYPE_URL, ANON_MEETING_CREATE_URL,
    SINGLE_MEETING_URL, GROUP_MEETING_URL
 } from '../constants';


export const getEvent = (username, link_url) => {
    return axios.get(`${MEETING_TYPE_URL}event/${username}/${link_url}/`)
}

export const createAnonMeeting = (data) => {
    return axios.post(ANON_MEETING_CREATE_URL, data)
}

export const createSingleMeeting = (data) => {
    return axios.post(SINGLE_MEETING_URL, data)
}

export const createGroupMeeting = (data) => {
    return axios.post(GROUP_MEETING_URL, data)
}