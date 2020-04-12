const header_notifications = (state=[], action) => {
    switch(action.type){
    case 'FETCH_NOTIFICATION_FULFILLED':
        return [...action.payload.data];
    case 'UPDATE_NOTIFICATION_FULFILLED':
        return state.map(n => n.uuid === action.payload.data.uuid ? action.payload.data : n)
    default:
        return state
    }
}

export default header_notifications;
