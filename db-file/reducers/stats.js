import { combineReducers } from 'redux';
import { dailySalesChart, emailsSubscriptionChart } from "variables/charts.jsx";

const meetings = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DAILY_MEETINGS_FULFILLED':
            return [...action.payload.data.results]
        default:
            return state;
    }
}

const answers = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DAILY_ANSWERS_FULFILLED':
            return [...action.payload.data.results]
        default:
            return state;
    }
}

const queries = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DAILY_QUERIES_FULFILLED':
            return [...action.payload.data.results]
        default:
            return state;
    }
}

export default combineReducers({ meetings, answers, queries });

export const getDailyMeetings = (state) => state.stats.meetings
export const getDailyAnswers = (state) => state.stats.answers
export const getDailyQueries = (state) => state.stats.queries


const getChart = (chart, data) => ({
    ...chart,
    data,
    options: {
        ...chart.options,
        high: Math.max(Math.max(...data.series[0]), 0) + 2
    }
})

const getData = (items) => ({ 
    labels: items.map(item => item.day), 
    series: [ items.map(item => item.count) ]
})

const getChartData = (chart, items) => (getChart(chart, getData(items)))

export const getDailyMeetingsChart = (state) => getChartData(dailySalesChart, getDailyMeetings(state))

export const getDailyAnswersChart = (state) => getChartData(emailsSubscriptionChart, getDailyAnswers(state))

export const getDailyQueriesChart = (state) => getChartData(dailySalesChart, getDailyQueries(state))
