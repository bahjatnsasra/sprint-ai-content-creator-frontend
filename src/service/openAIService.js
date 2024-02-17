import { get, post } from './httpService';
import axios from 'axios';
import { day1Prompt, day2Prompt, day3Prompt, day4Prompt, day5Prompt } from './daysPropmts';

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

export async function createProgramPlan(prpgramPlanObj) {
    try {
        const programPlan = (await post(`ProgramPlan/create`,prpgramPlanObj))
        return programPlan.object
    } catch (error) {
        console.log(error);
    }
}
export const getImageUrl = async (subject) => {
    try {
        const imageUrl = await get(`OpenAI/get/image/${subject}`);
        return imageUrl;
    } catch (error) {
        console.log(error);
    }
}

export const createStructure = async(structureInfo) => {
    try {
        const structure = (await post(`OpenAI/create/structure`,structureInfo))
        return structure
    } catch (error) {
        
    }
}


const OpenAIUrl = "https://api.openai.com/v1/chat/completions";
const openAiheaders = {
	"Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
    "Content-Type" : "application/json"
};

// Function to generate the prompt data for OpenAI API
const OpenAIGenerateProgramStructure = (subject, contentType, learn) => {
    let content = '';
    if(contentType === true) {
        content = 'very important to add chat GPT, dall E, or Gemini to one task per day!';
    }
    const prompt = {
        "model": "gpt-4",
        "messages": [{
            "role": "user",
            "content": `You are an expert in writing learning paths in different fields for children.
            Your goal is to write a learning path that is pedagogically adapted for children at the age of 8 in Israel.
            The path is learned independently, for 5 days, each day for about an hour and a half.
            Its goal is to empower independent learning, creativity, and critical thinking.
            The course should work on the following skills: independent learning, creativity, technological literacy, and critical thinking.
            On the third day, there is a class meeting for half an hour, and on the fifth and final day, there is a class meeting for an hour.
            You need to build a template of 5 days, with each day having a title, goal (one or two sentences), and headings of the tasks on that day (3-4 tasks). 
            ${content} (remember that the children at the age of 8 so dont give then something hard). 
            (if you offer videos add link for that) On the fourth day, there is a task dedicated to preparing the learning presentation in front of the entire class. 
            Your topic is ${subject}.The path should teach students to understand ${learn} and create a product (give me ideas for types of products in the context of this project. 
            For example: list, poster, creating an image with an artificial intelligence tool, etc.).
            During the course, there is no teaching, the students need to understand concepts and acquire knowledge independently through experimentation.Each day should include practical, active work. 
            dont suggest to watch video or install some apps. 
            dont suggest to upload text files beacuse the children have a textbox. 
            Use simple words that children know. Use words that 8 year olds understand. 
            build missions that 8 years old children can do. 
            Pay attention to the instructions of the tasks.
            Emphasize that the tasks will not be similar.
            give me the answer in hebrew!`
        }],
        "temperature": 0.7
    };
    return prompt;
};


export const generateProgramStructure = async (subject, contentType, learn) => {
    try {
        const promptData = OpenAIGenerateProgramStructure(subject, contentType, learn);
        const responseData = await axios.post(OpenAIUrl, promptData, { headers: openAiheaders });
        const structure = responseData.data.choices[0].message.content;
        console.log(structure);
        return structure;
    } catch (error) {
        throw error;
    }
};

export const generateDay1 = async (struc) => {
    try {
        const promptData = day1Prompt(struc);
        const responseData = await axios.post(OpenAIUrl, promptData, { headers: openAiheaders });
        const structure = responseData.data.choices[0].message.content;
        console.log(structure);
        return structure;
    } catch (error) {
        throw error;
    }
};

export const generateDay2 = async (struc) => {
    try {
        const promptData = day2Prompt(struc);
        const responseData = await axios.post(OpenAIUrl, promptData, { headers: openAiheaders });
        const structure = responseData.data.choices[0].message.content;
        console.log(structure);
        return structure;
    } catch (error) {
        throw error;
    }
};

export const generateDay3 = async (struc) => {
    try {
        const promptData = day3Prompt(struc);
        const responseData = await axios.post(OpenAIUrl, promptData, { headers: openAiheaders });
        const structure = responseData.data.choices[0].message.content;
        console.log(structure);
        return structure;
    } catch (error) {
        throw error;
    }
};

export const generateDay4 = async (struc) => {
    try {
        const promptData = day4Prompt(struc);
        const responseData = await axios.post(OpenAIUrl, promptData, { headers: openAiheaders });
        const structure = responseData.data.choices[0].message.content;
        console.log(structure);
        return structure;
    } catch (error) {
        throw error;
    }
};

export const generateDay5 = async (struc) => {
    try {
        const promptData = day5Prompt(struc);
        const responseData = await axios.post(OpenAIUrl, promptData, { headers: openAiheaders });
        const structure = responseData.data.choices[0].message.content;
        console.log(structure);
        return structure;
    } catch (error) {
        throw error;
    }
};