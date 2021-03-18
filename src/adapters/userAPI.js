const BASEURL = `https://volungoapi.herokuapp.com/api/v1/users`;
const SIGNUP = BASEURL + `/signup`;
const SIGNIN = BASEURL + `/signin`; 

export const userSignUp  = async (data) => {
    try {
        console.log(data);
        const response = await fetch(SIGNUP, {
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
        return responseData;
        // if (responseData.status === 'success') {
        //     return responseData.token 
        // } 
    } catch (error) {
        console.log(error);
    }
}

export const userSignIn = async (data) => {
    try {
        const response = await fetch(SIGNIN, {
            method: 'POST', 
            // credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            },
            body: data
        });
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.log(error);
    }
}