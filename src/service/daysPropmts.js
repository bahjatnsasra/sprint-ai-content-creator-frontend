export const day1Prompt = (programStructure) => {
    const prompt = {
		"model": "gpt-4",
		"messages": [{
			"role": "user", 
			"content": `this is the program structure: ${programStructure}. let's create a plan for each day, for children at the age of 8. Comprised of 3-4 tasks: one of them must be highly creative, and the last one should possess a meta-cognitive nature.It's important that the meta-cognitive task doesn't repeat itself from day to day but rather reflects progress in the student's ability to understand their own learning and the content on the course.Each task needs to be detailed according to this structure: Title Instructions for the task The student's performance documentation method (e.g., uploading a picture/video/file, answering questions, writing text, or pasting links) Estimated duration for completion Guidelines - additions that will help the student understand the task and execute it well. Remember! the age of the childrens is 8 -  Address it in the content you write and how you write it. Use simple words that children at the age of 8 can understood. If there is a fear that a children will not succeed in the task - break down the tasks into small tasks and give more data in the directive.
			planning only Day 1: allocate 90 minutes for studying in total - it's important to make sure that all tasks for this day will amount to a total of 90 minutes and not more. bring the answer in hebrew`}],
		"temperature": 0.5,
		"functions" : [{
			"name": "create_day_plan",
			"parameters": {
				"type": "object",
				"properties": {
					"title" : {"type" : "string", "description" : "day plan title "},
					"tasks" : {"type" : "string", "description" : "day tasks "},
				}
			}
		}]
	}
    return prompt;
};

export const day2Prompt = (programStructure) => {
	const prompt = {
	  "model": "gpt-4",
	  "messages": [{
		"role": "user",
		"content": `this is the program structure: ${programStructure}. Let's create a plan for each day, for children aged 8. Comprised of 3-4 tasks: one of them must be highly creative, and the last one should possess a meta-cognitive nature. It's important that the meta-cognitive task doesn't repeat itself from day to day but rather reflects progress in the student's ability to understand their own learning and the content on the course. Each task needs to be detailed according to this structure:
  
		Title
		Instructions for the task
		The student's performance documentation method (e.g., uploading a picture/video/file, answering questions, writing text, or pasting links)
		Estimated duration for completion
		Guidelines - additions that will help the student understand the task and execute it well.
  
		Remember! The age of the children is 8 - Address it in the content you write and how you write it. Use simple words that children aged 8 can understand. If there is a fear that a child will not succeed in the task, break down the tasks into smaller tasks and give more information in the directive.
  
		Plan only Day 2: a total of 90 minutes dedicated to learning - Please allocate time for each task and make sure that all the tasks for this day amount to 90 minutes and not more. Don't forget the general guidelines I provided regarding each day and the nature of the tasks. Bring the answer in Hebrew.`, // Removed the control character
	  }],
	  "temperature": 0.5,
	  "functions": [{
		"name": "create_day_plan",
		"parameters": {
		  "type": "object",
		  "properties": {
			"title": { "type": "string", "description": "day plan title " },
			"tasks": { "type": "string", "description": "day tasks " },
		  }
		}
	  }]
	};
	return prompt;
};

export const day3Prompt = (programStructure) => {
	const prompt = {
	  "model": "gpt-4",
	  "messages": [{
		"role": "user",
		"content": `this is the program structure: ${programStructure}. Let's create a plan for Day 3, for children aged 8. It should comprise 3-4 tasks, with one being highly creative and the last involving metacognition. The metacognitive task should assess their understanding of the course content and learning progress. Each task needs details like:
  
		Title
		Instructions for the task
		The student's performance documentation method (e.g., uploading a picture/video/file, answering questions, writing text, or pasting links)
		Estimated duration for completion
		Guidelines - additional information to help students understand and complete the task successfully.
  
		Remember, the children are 8 years old. Use simple language and clear instructions. Break down complex tasks and provide additional information if needed to ensure their success.
  
		Plan only for Day 3: Learning lessons allocated for a total of 60 minutes. For each task, estimate the approximate time, and make sure all tasks for this day add up to a total of 60 minutes. Please provide the answer in Hebrew.`, // Removed control character
	  }],
	  "temperature": 0.5,
	  "functions": [{
		"name": "create_day_plan",
		"parameters": {
		  "type": "object",
		  "properties": {
			"title": { "type": "string", "description": "day plan title " },
			"tasks": { "type": "string", "description": "day tasks " },
		  }
		}
	  }]
	};
	return prompt;
};

export const day4Prompt = (programStructure) => {
	const prompt = {
	  "model": "gpt-4",
	  "messages": [{
		"role": "user",
		"content": `this is the program structure: ${programStructure}. Let's create a plan for Day 4, for children aged 8. It should comprise 3-4 tasks, with one being highly creative and the last involving metacognition. The metacognitive task should assess their understanding of the course content and learning progress. Each task needs details like:
  
		Title
		Instructions for the task
		The student's performance documentation method (e.g., uploading a picture/video/file, answering questions, writing text, or pasting links)
		Estimated duration for completion
		Guidelines - additional information to help students understand and complete the task successfully.
  
		Remember, the children are 8 years old. Use simple language and clear instructions. Break down complex tasks and provide additional information if needed to ensure their success.
  
		Plan only for Day 4: Allocated study time: 90 minutes in total. The final task of the day should involve presenting the learning throughout the course to the entire class. Encourage creativity in the presentation and highlight the learning process rather than just the content taught. Please provide the answer in Hebrew.`, // Removed control character
	  }],
	  "temperature": 0.5,
	  "functions": [{
		"name": "create_day_plan",
		"parameters": {
		  "type": "object",
		  "properties": {
			"title": { "type": "string", "description": "day plan title " },
			"tasks": { "type": "string", "description": "day tasks " },
		  }
		}
	  }]
	};
	return prompt;
};

export const day5Prompt = (programStructure) => {
	const prompt = {
	  "model": "gpt-4",
	  "messages": [{
		"role": "user",
		"content": `this is the program structure: ${programStructure}. Let's create a plan for Day 5, for children aged 8. It should comprise 3-4 tasks, with one being highly creative and the last involving metacognition. The metacognitive task should assess their understanding of the course content and learning progress. Each task needs details like:
  
		Title
		Instructions for the task
		The student's performance documentation method (e.g., uploading a picture/video/file, answering questions, writing text, or pasting links)
		Estimated duration for completion
		Guidelines - additional information to help students understand and complete the task successfully.
  
		Remember, the children are 8 years old. Use simple language and clear instructions. Break down complex tasks and provide additional information if needed to ensure their success.
  
		Plan only for Day 5: Designated learning time: 135 minutes total. For each task, estimate the approximate time, and make sure all tasks for this day add up to a total of 135 minutes. The first task of the day should lead to the creation of a group product involving all the students who have chosen your study program. They need to present the program in an engaging way, emphasizing its structure, nature, and content. It's recommended to allocate 30 minutes for preparation. The second task of the day involves presenting the program and watching presentations of other programs. Therefore, the documentation of learning for this task should relate to one of these options. The third task for the day should focus on forward thinking for continuous learning or using skills and content from the program in new contexts. Please provide the answer in Hebrew.`, // Removed control character
	  }],
	  "temperature": 0.5,
	  "functions": [{
		"name": "create_day_plan",
		"parameters": {
		  "type": "object",
		  "properties": {
			"title": { "type": "string", "description": "day plan title " },
			"tasks": { "type": "string", "description": "day tasks " },
		  }
		}
	  }]
	};
	return prompt;
};
  
