import api from './api';

export const fetchTeams = () => api.dispatch('FETCH_TEAMS', 'get', '/teams/teams/')

export const fetchTeam = (uuid) => api.dispatch('FETCH_TEAM', 'get', `/teams/teams/${uuid}/`)

export const createTeam = (data) => api.dispatch('CREATE_TEAM', 'post', '/teams/teams/', data)

export const updateTeam = (uuid, data) => api.dispatch('UPDATE_TEAM', 'patch', `/teams/teams/${uuid}/`, data)
  
export const fetchMembers =() => api.dispatch('FETCH_MEMBERS', 'get', '/teams/members/')

export const addMembers =(uuid, data) => api.dispatch('UPDATE_TEAM', 'post', `/teams/teams/${uuid}/members/`, data)

export const joinTeam =(uuid) => api.dispatch('JOIN_TEAM', 'post', `/teams/teams/${uuid}/join/`)

export const fetchTeamMeetings = (uuid) => api.dispatch('FETCH_TEAM_MEETINGS', 'get', `/teams/teams/${uuid}/meetings/`)

export const fetchFilteredTeamMeetings = (url, meta) => 
    api.dispatch('FETCH_TEAM_MEETINGS', 'get', url, null, meta)

export const assignMeeting = (uuid, data) => api.dispatch('ASSIGN_MEETING', 'post', `/teams/teams/${uuid}/assign/`, data)

export const removeMember = (uuid, data) => api.dispatch('UPDATE_TEAM', 'post', `/teams/teams/${uuid}/remove/`, data)

export const deleteTeam = (uuid) => api.dispatch('DELETE_TEAM', 'delete', `/teams/teams/${uuid}/`, null, { uuid })

export const fetchTeamEventTypes = (uuid) => api.dispatch('FETCH_TEAM_EVENTTYPES', 'get', `/teams/teams/${uuid}/eventtypes/`)

export const fetchPublicTeam = (username, team_url) => api.dispatch('FETCH_PUBLIC_TEAM', 'get', `/teams/publicteam/${username}/${team_url}/`, null, null, false)

export const editTeamMember = (data) => api.dispatch('UPDATE_TEAM', 'patch', `/teams/teams/editmember/`, data)

export const validateTeamLink = (link) => api.request('get', `/teams/validate/${link}/`)
