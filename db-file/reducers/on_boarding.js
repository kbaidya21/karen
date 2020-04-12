import { combineReducers } from 'redux';


const pending = (state=false, action) => {
    switch(action.type){
        case 'SUBMIT_DATA_PENDING':
            return true 
        
            return state
    }
}

export default combineReducers({ pending })

export const isPending = (state) => state.on_boarding.pending