// const axios = require('axios');
import { get } from './httpService'


export async function getWeekPlan(id) {
    try {
        const weekPlan = await get(`WeekPlan/${id}/get`)
        console.log(weekPlan);
    } catch (error) {
        console.log(error);
    }
}

