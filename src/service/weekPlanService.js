import { post } from './httpService'


export async function createWeekPlan(id) {
    try {
        const weekPlanId = await post(`WeekPlan/${id}/create`)
        return weekPlanId
    } catch (error) {
        console.log(error);
    }
}




