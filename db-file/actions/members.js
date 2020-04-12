import api from './api';


export const fetchMembers =() => api.dispatch('FETCH_MEMBERS', 'get', '/teams/members/')

export const addMembers = (data) => api.dispatch('ADD_MEMBERS', 'post', '/teams/members/', data)

export const removeMember = (uuid) => api.dispatch('REMOVE_MEMBER', 'delete', `/teams/members/${uuid}/`, null, { uuid })

export const  fetchInvitations = () => api.dispatch('FETCH_INVITATIONS', 'get', `/teams/members/invitations/`)

export const  joinOrganization = (uuid) => api.dispatch('JOIN_INVITATION', 'post', `/teams/join/${uuid}/`)