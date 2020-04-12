import {combineReducers} from 'redux';

const one_on_one = (state=[], action) => {
    switch(action.type){
    case 'FETCH_ONEONONE_FULFILLED':
        return [...action.payload.data];
    case 'UPDATE_ONEONONE_FULFILLED':
        const uuid = action.payload.data.uuid;
        return state.map(e => e.uuid === uuid ? action.payload.data : e)
    case 'CREATE_ONE_ON_ONE_FULFILLED':
        return [ action.payload.data, ...state ]
    case 'DELETE_ONEONONE_FULFILLED':
        return [ ...state.filter(e => e.uuid !== action.meta.uuid)]
    default:
        return state
    }
}

const group_events = (state=[], action) => {
    switch(action.type){
    case 'FETCH_GROUP_EVENT_FULFILLED':
        return [...action.payload.data];
    case 'UPDATE_GROUP_EVENT_FULFILLED':
        const uuid = action.payload.data.uuid;
        return state.map(e => e.uuid === uuid ? action.payload.data : e)
    case 'CREATE_GROUP_EVENT_FULFILLED':
        return [ action.payload.data, ...state ]
    case 'DELETE_GROUP_EVENT_FULFILLED':
        return [ ...state.filter(e => e.uuid !== action.meta.uuid)]
    default:
        return state
    }
}


export const getOneOnOne = (state) => state.meeting_types.one_on_one;
export const getGroupEvents = (state) => state.meeting_types.group_events;

export const getOneOnOneType = (state, uuid) => {
    for(let mt of getOneOnOne(state)){
        if(mt.uuid === uuid) {
            return mt
        }
    }
    return null
}

export const getGroupEventType = (state, uuid) => {
    for(let mt of getGroupEvents(state)){
        if(mt.uuid === uuid) {
            return mt
        }
    }
    return null
}

export const getEvent = (state, uuid) => getOneOnOneType(state, uuid) || getGroupEventType(state, uuid)

export default combineReducers({ one_on_one, group_events })
