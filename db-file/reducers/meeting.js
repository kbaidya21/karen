import { combineReducers } from 'redux'

const meetings = (state=[], action) => {
  switch(action.type){
    case 'FETCH_MEETING_FULFILLED':
      if(action.meta && action.meta.more){
        return [ ...state, ...action.payload.data.results ]
      }
      return [ ...action.payload.data.results ]
    case 'UPDATE_MEETING_FULFILLED':
    case 'ASSIGN_MEETING_FULFILLED':
      if(action.payload.data.status === 'CANCELLED'){
        return state.filter(m => m.uuid !== action.payload.data.uuid)
      } else {
        return state.map(m => m.uuid === action.payload.data.uuid? action.payload.data: m)
      }
    default:
      return state;
  }
}

const scroll = (state={}, action) => {
  switch(action.type){
    case 'FETCH_MEETING_FULFILLED':
      const { results, ...rest } = action.payload.data
      return ({ ...rest })
    default:
      return state
  }
}

export default combineReducers({ meetings, scroll });

export const getMeetings = (state) => state.meeting.meetings
export const getScroll = (state) => state.meeting.scroll
