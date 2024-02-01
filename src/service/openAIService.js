import { get } from './httpService'

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
