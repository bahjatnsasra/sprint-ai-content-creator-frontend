import {post} from './httpService'

export async function createDay(weekPlanId, DayObject) {
    try {
        await post(`Day/${weekPlanId}/create`,DayObject)
    } catch (error) {
        console.log(error);
    }
}