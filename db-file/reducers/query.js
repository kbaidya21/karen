const queries = (state=[], action) => {
    switch(action.type){
      case 'FETCH_QUERY_FULFILLED':
        return [ ...action.payload.data.reverse() ]
      case 'QUERY_ANSWER_FULFILLED':
        return state.map(q => q.uuid === action.payload.data.uuid? action.payload.data : q)
      default:
        return state;
    }
  }

  export default queries;

  export const getQueries = (state) => state.query
