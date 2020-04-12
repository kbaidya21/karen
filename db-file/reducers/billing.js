import { combineReducers } from 'redux';
import { createPending } from './common';

const subscription = (state=null, action) => {
    switch(action.type){
        case 'GET_SUBSCRIPTION_FULFILLED':
        case 'CARD_SUBSCRIPTION_FULFILLED':
        case 'REACTIVATE_SUBSCRIPTION_FULFILLED':
        case 'CANCEL_SUBSCRIPTION_FULFILLED':
            return action.payload.data || null
        case 'GET_SUBSCRIPTION_REJECTED':
            return null
        default: 
            return state
    }
}

const invoices = (state=[], action) => {
    switch(action.type){
        case 'FETCH_INVOICES_FULFILLED':
            return action.payload.data
        case 'FETCH_INVOICES_REJECTED':
            return []
        default:
            return state
    }
}

const plans = (state=[], action) => {
    switch(action.type){
        case 'FETCH_PLANS_FULFILLED':
            return action.payload.data || []
        case 'FETCH_PLANS_REJECTED':
            return []
        default:
            return state
    }
}

export const stripeApiKey = (state=null, action) => {
    if(action.type === 'FETCH_STRIPE_KEY_FULFILLED')
        return action.payload.data.key
    return state
}

const pending = createPending(['GET_SUBSCRIPTION', 'CARD_SUBSCRIPTION', 'CANCEL_SUBSCRIPTION'])


export default combineReducers({ pending, subscription, invoices, plans, stripeApiKey })


export const isPending = (state) => state.billing.pending
export const getSubscription = (state) => state.billing.subscription
export const getInvoices = (state) => state.billing.invoices
export const getPlans = (state) => state.billing.plans
export const getStripeApiKey = (state) => state.billing.stripeApiKey
export const getPremiumQuantity = (state) => {
    let sub = getSubscription(state)
    return sub? sub.quantity : 0
}