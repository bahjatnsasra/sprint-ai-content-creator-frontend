import axios from 'axios';



export async function request(url, method, data = null) {
  
  try {
    
    const options = {
      method, 
      headers : {
        'Content-Type': 'application/json' 
      }
    }
    if (data) {
      options['data'] = {...data}
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

export async function get(url) {
  try {
    const response = await request(url , 'get')
    return response
  } catch (error) {
    throw error
  }
}

export async function post(url, data, headers = null) {
  try {
    const response = await request(url,'post',data);
    return response
  } catch (error) {
    throw error
  }
};

export async function put(url, data) {
  try {
    const response = await request(url,'put', data);
    return response
  } catch (error) {
    throw error;
  }
};

export async function remove(url) {
  try {
    const response = await request(url);
    return response
  } catch (error) {
    throw error;
  }
};