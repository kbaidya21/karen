import { combineReducers } from 'redux';
import { createPending } from './common';

const teams = (state=[], action) => {
    switch(action.type){
        case 'FETCH_TEAMS_FULFILLED':
            return [ ...action.payload.data ]
        case 'CREATE_TEAM_FULFILLED':
            return [ action.payload.data, ...state ]
        case 'UPDATE_TEAM_FULFILLED':
        case 'JOIN_TEAM_FULFILLED':
        case 'REMOVE_MEMBER_FULFILLED':
            let team = action.payload.data
            return state.map(t => (t.uuid === team.uuid)? team : t)
        case 'DELETE_TEAM_FULFILLED':
            return state.filter(t => t.uuid !== action.meta.uuid)
        case 'FETCH_TEAM_FULFILLED':
            return [ action.payload.data, ...state ]
        default:
            return state;
    }
}

const meetings = (state=[], action) => {
    switch(action.type){
        case 'FETCH_TEAM_MEETINGS_FULFILLED':
            if(action.meta && action.meta.more){
                return [ ...state, ...action.payload.data.results ]
            }
            return [ ...action.payload.data.results ]
        case 'FETCH_TEAM_MEETINGS_PENDING':
        case 'FETCH_TEAM_MEETINGS_REJECTED':
            if(action.meta && action.meta.more){
                return state
            }
            return []
        case 'ASSIGN_MEETING_FULFILLED':
            return state.map(m => m.uuid === action.payload.data.uuid? action.payload.data: m)
        default:
            return state
    }
}

const scroll = (state={}, action) => {
    switch(action.type){
      case 'FETCH_TEAM_MEETINGS_FULFILLED':
        const { results, ...rest } = action.payload.data
        return ({ ...rest })
      default:
        return state
    }
}

const event_types = (state=[], action) => {
    switch(action.type){
        case 'FETCH_TEAM_EVENTTYPES_FULFILLED':
            return [ ...action.payload.data ]
        case 'UPDATE_ONEONONE_FULFILLED':
            const uuid = action.payload.data.uuid;
            return state.map(e => e.uuid === uuid ? action.payload.data : e)
        default:
            return state
    }
}

// const members = (state=[], action) => {
//     switch(action.type){
//         case 'FETCH_MEMBERS_FULFILLED':
//             return [ ...action.payload.data.results ]
//         default:
//             return state
//     }
// }

const pending = createPending([
    'FETCH_MEMBERS', 'ADD_MEMBERS', 'FETCH_TEAMS', 'CREATE_TEAM', 'UPDATE_TEAM',
    'FETCH_TEAM_MEETINGS'
])

export default combineReducers({ teams, pending, meetings, scroll, event_types })

export const isPending = (state) => state.teams.pending
export const getTeams = (state) => state.teams.teams
export const getTeamMeetings = (state) => state.teams.meetings
export const getScroll = (state) => state.teams.scroll
export const getTeam = (state, team_uuid) => getTeams(state).filter(t => t.uuid === team_uuid)[0]
export const getMembers = (state) => state.teams.members
export const getEventTypes = (state, team_uuid) => state.teams.event_types