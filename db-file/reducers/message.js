const messages = (state=[], action) => {
  switch(action.type){
    case 'FETCH_MESSAGE_FULFILLED':
      return [ ...action.payload.data.reverse() ]
    case 'MESSAGE_REPLY_FULFILLED':
      let msg = action.payload.data[0]
      const new_state = state.map(m => m.uuid === msg.uuid? msg: m)
      return [ ...new_state, action.payload.data[1]]
    default:
      return state;
  }
}

export default messages;

export const getMessages = (state) => state.message
