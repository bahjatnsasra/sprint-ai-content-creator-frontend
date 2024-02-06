import { get, post } from './httpService'

export async function getSubjects() {
    try {
        const subjectList = await get(`OpenAI/get/subjects`)
        return subjectList
    } catch (error) {
        console.log(error);
    }
}

export async function getUnderSubjects(subject) {
    try {
        const subjectList = await get(`OpenAI/get/subTopics/${subject}`);
        return subjectList;
    } catch (error) {
        console.log(error);
    }
}

export async function getSubjectDescription(subject) {
    try {
        const subjectDescription = await get(`OpenAI/get/description/${subject}`);
        return subjectDescription;
    } catch (error) {
        console.log(error);
    }
}

export async function getImageUrl(subject) {
    try {
        const imageUrl = await get(`OpenAI/get/image/${subject}`);
        return imageUrl;
    } catch (error) {
        console.log(error);
    }
}

export async function createProgramPlan(object) {
    try {
        const programPlan = await post(`ProgramPlan/create`, object);
        console.log(programPlan);
        return programPlan;
    } catch (error) {
        console.log(error);
    }
}


