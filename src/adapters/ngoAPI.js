const BASEURL = `https://volungoapi.herokuapp.com/api/v1/ngos`;
const SIGNUP = BASEURL + `/signup`;
const SIGNIN = BASEURL + `/signin`;
const GETME = BASEURL + `/me`;

export const ngoSignUp  = async (data) => {
    try {
        //console.log(data);
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

export const ngoSignIn = async (data) => {
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
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

export const getMe = async () => {
    const TOKEN = localStorage.getItem('token');
    //console.log(TOKEN);
    try {
        const response = await fetch(GETME, {
            method: 'GET', 
            // credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${TOKEN}`,
            }
        })
        const responseData = await response.json();
        return responseData;
    } catch(error) {
        console.log(error);
    }
}
