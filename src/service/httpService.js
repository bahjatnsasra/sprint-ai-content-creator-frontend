import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});



export async function request(url, method, data = null) {
  try {
    const options = {
      method, 
      data
    }
    if (data) {
      options.body = JSON.stringify({...data})
    }
    const response = await axios(url,options)
    return response.data
  } catch (error) {
    if(error.request){
      console.log('Error', error.message);
      throw(error.response.data)
    }
  }
}
// GET request

export async function get(url) {
  try {
    const response = await request(url , 'get')
    return response
  } catch (error) {
    throw(error)
  }
}

// const get = async (endpoint) => {
//   try {
//     const response = await api.get(endpoint);
//     return response.data;
//   } catch (error) {
//     console.error('GET Request Error:', error.message);
//     throw error;
//   }
// };

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

  

