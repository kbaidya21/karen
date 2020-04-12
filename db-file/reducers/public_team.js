import { combineReducers } from 'redux';
import { createPending } from './common';

// const team = (state=null, action) => {
//     switch(action.type){
//         case 'FETCH_PUBLIC_TEAM_FULFILLED':
//             return { ...action.payload.data }
//         default:
//             return state
//     }
// }

const createReducer = (initialState, type, dataFunc) => {
    return (state=initialState, action) => {
        switch(action.type){
            case type:
                return dataFunc(state, action)
            default:
                return state
        }
    }
}

const user = createReducer(null, 'FETCH_PUBLIC_TEAM_FULFILLED', (s, a) => (a.payload.data.user || null))

const team = createReducer(null, 'FETCH_PUBLIC_TEAM_FULFILLED', (s, a) => (a.payload.data.team || null))

const events = createReducer([], 'FETCH_PUBLIC_TEAM_FULFILLED', (s, a) => (a.payload.data.events || []))

// const events = (state=[], action) => {
//     switch(action.type){
//         case 'FETCH_PUBLIC_TEAM_EVENTS_FULFILLED':
//             return [ ...action.payload.data ]
//         default:
//             return state
//     }
// }

const pending = createPending([ 'FETCH_PUBLIC_TEAM' ])

export default combineReducers({ user, team, events, pending })

export const getUser = (state) => state.public_team.user;
export const getTeam = (state) => state.public_team.team;
export const getEvents = (state) => state.public_team.events;
export const isPending = (state) => state.public_team.pending;

export const getState = (state) => ({
    user: getUser(state),
    team: getTeam(state),
    events: getEvents(state),
    pending: isPending(state),
})