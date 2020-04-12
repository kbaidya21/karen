import axios from 'axios';
import { BASE_URL } from '../constants';
import { getToken } from 'reducers/login';
import { fetchUser } from './login';
import api from './api';

export const createCardSubscription = (source, plan_id) => (dispatch, getState) => {
    const state = getState()
    const token = getToken(state);
    if (!token) return;

    return dispatch({
      type: 'CARD_SUBSCRIPTION',
      payload: axios.post(`${BASE_URL}/billing/card-subscription/${plan_id}/`, {source}, { headers: { Authorization: token }})
    })
}

export const createPayment = (token_id, quantity, plan_id, coupon) => (dispatch, getState) => {
  const state = getState()
  const token = getToken(state);
  if (!token) return;

  return axios.post(`${BASE_URL}/billing/card-subscription/${plan_id}/`, { token_id, quantity, coupon }, { headers: { Authorization: token }})
}


export const getSubscription = () => api.dispatch('GET_SUBSCRIPTION', 'get', '/billing/get-subscription/')


export const cancelSubscription = (at_period_end) => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;

  return dispatch({
    type: 'CANCEL_SUBSCRIPTION',
    payload: axios.post(`${BASE_URL}/billing/cancel-subscription/`, {at_period_end}, { headers: { Authorization: token }})
  }).then(resp => {
    let data = resp.action.payload.data
    if(data && data.status === 'Canceled'){
      getSubscription()(dispatch, getState)
      fetchUser()(dispatch, getState)
    }
  })
}


export const fetchPlans = () => api.dispatch('FETCH_PLANS', 'get', '/billing/plans/')

export const getInvoices = () => api.dispatch('FETCH_INVOICES', 'get', '/billing/invoices/')

export const reActivateSubscription = () => api.dispatch('REACTIVATE_SUBSCRIPTION', 'post', '/billing/reactivate/', {})

export const fetchStripeApiKey = () => api.dispatch('FETCH_STRIPE_KEY', 'get', '/billing/pk/', null, null, false)

export const changeCard = (token_id) => api.request('post', '/billing/change-card/', { token_id })

export const updateSubscription = (data) => api.request('post', '/billing/update-subscription/', data)

export const confirmUpdateSubscription = (data) => api.request('post', '/billing/confirm-update-subscription/', data)

export const fetchUpcomingInvoice = (data) => api.request('post', '/billing/upcoming/', data)