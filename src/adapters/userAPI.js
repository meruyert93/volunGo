const URL = `https://volungoapi.herokuapp.com/api/v1/users/signup`;
const SIGNUP = ``; 

export const userSignUp  = async (data) => {
    try {
        console.log(data);
        const response = await fetch(URL, {
            method: 'POST', 
            // credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            },
            body: data
            
        });
        // const signUp =  response.json();
        const responseData = await response.json();
        if (responseData.status === 'success') {
            return responseData.token 
        } 
        console.log(responseData.error);
    } catch (error) {
        console.log(error);
    }
}
