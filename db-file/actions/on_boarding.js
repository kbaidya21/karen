import axios from 'axios'
import { SUBMIT_DATA_URL } from '../constants'
import { getToken } from 'reducers/login';
import api from './api'

export const submitOnboarding = (data) => api.request('post', `/accounts/usermeta/`, data )

