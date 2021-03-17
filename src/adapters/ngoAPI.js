const URL = `https://volungoapi.herokuapp.com/api/v1/ngos/signup`;

export const ngoSignUp  = async (data) => {
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
        console.log(responseData);
        return responseData;
        // if (responseData.status === 'success') {
        //     return responseData.token 
        // } 
    } catch (error) {
        console.log(error);
    }
}
