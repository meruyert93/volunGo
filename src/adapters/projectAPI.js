const URL = `https://volungoapi.herokuapp.com/api/v1/projects`;
const TOKEN = localStorage.getItem('token')

export const createProject = async (data) => {
    console.log(TOKEN);
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
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.log(error);
    }
}