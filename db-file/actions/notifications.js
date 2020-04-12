export const showMessage = (message) => ({
    type: 'SHOW_MESSAGE_FULFILLED',
    message
})
export const closeShortMessage = () => ({
    type: 'HIDE_MESSAGE'
})