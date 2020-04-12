export const createPending = (acts) => {
    const pending = acts.map(a => a+'_PENDING')
    const not_pending = acts.map(a => a+'_FULFILLED').concat(acts.map(a => a+'_REJECTED'))

    return (state=false, action) => {
        if(pending.includes(action.type))
            return true
        else if(not_pending.includes(action.type))
            return false
        else
            return state
    }
}