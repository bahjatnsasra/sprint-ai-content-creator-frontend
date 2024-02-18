import { get, post } from './httpService'


export async function createProgramPlan(programPlanObject) {
    try {
        const programPlanId = await post(`ProgramPlan/create`,programPlanObject)
        return programPlanId
    } catch (error) {
        console.log(error);
    }
}
