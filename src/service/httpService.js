const axios = require('axios');

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET request
const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('GET Request Error:', error.message);
    throw error;
  }
};

// POST request
const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST Request Error:', error.message);
    throw error;
  }
};

// PUT request
const put = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('PUT Request Error:', error.message);
    throw error;
  }
};

// DELETE request
const remove = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('DELETE Request Error:', error.message);
    throw error;
  }
};

// Example usage
// (async () => {
//   try {
//     // GET example
//     const todos = await get('/todos');
//     console.log('GET Todos:', todos);

//     // POST example
//     const newTodo = await post('/todos', { title: 'New Todo', completed: false });
//     console.log('POST New Todo:', newTodo);

//     // PUT example
//     const updatedTodo = await put('/todos/1', { title: 'Updated Todo', completed: true });
//     console.log('PUT Updated Todo:', updatedTodo);

//     // DELETE example
//     const deletedTodo = await remove('/todos/1');
//     console.log('DELETE Deleted Todo:', deletedTodo);
//   } catch (error) {
//     console.error('Example Usage Error:', error.message);
//   }
// })();
