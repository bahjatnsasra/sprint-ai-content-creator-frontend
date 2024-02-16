const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export async function getSturctureAnswer(subject, contentType, learn) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are an expert in writing learning paths in different fields for children.
    Your goal is to write a learning path that is pedagogically adapted for children at the age of 8 in Israel.
    The path is learned independently, for 5 days, each day for about an hour and a half.
    Its goal is to empower independent learning, creativity, and critical thinking.
    The course should work on the following skills: independent learning, creativity, technological literacy, and critical thinking.
    On the third day, there is a class meeting for half an hour, and on the fifth and final day, there is a class meeting for an hour.
    You need to build a template of 5 days, with each day having a title, goal (one or two sentences), and headings of the tasks on that day (3-4 tasks). 
    very important to add ${contentType} to one task per day! (remember that the children at the age of 8 so dont give them something hard). 
    (if you offer videos add link for that) On the fourth day, there is a task dedicated to preparing the learning presentation in front of the entire class. 
    Your topic is ${subject}. The path should teach students to understand ${learn} and create a product (give me ideas for types of products in the context of this project. 
    For example: list, poster, creating an image with an artificial intelligence tool, etc.).
    During the course, there is no teaching, the students need to understand concepts and acquire knowledge independently through experimentation. Each day should include practical, active work. 
    dont suggest to watch video or install some apps. 
    dont suggest to upload text files because the children have a textbox. 
    Use simple words that children know. Use words that 8 year olds understand. 
    build missions that 8 years old children can do. 
    Pay attention to the instructions of the tasks.
    Emphasize that the tasks will not be similar. give the answer in hebrew! in your answer dont use this: *. dont give me links to things.`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text)
    return text
}