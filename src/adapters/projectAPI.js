import { getMe } from '../adapters/ngoAPI';

const URL = `https://volungoapi.herokuapp.com/api/v1/projects`;

export const createProject = async (data) => {
    const TOKEN = localStorage.getItem('token');
    try {
        const response = await fetch(URL, {
            method: 'POST', 
            // credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${TOKEN}`,
            },
            body: data
        })
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

export const getAllProjects = async () => {
    const TOKEN = localStorage.getItem('token');
    console.log(TOKEN);
    try {
        const response = await fetch(URL, {
            method: 'GET', 
            // credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${TOKEN}`,
            }
        })
        const responseData = await response.json();
        //console.log(responseData);
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

export const getAllMyProjects = async () => {
    try {
        const response = await getMe();
        console.log(response);
        return response
    } catch (error) {
        console.log(error);
    }
}