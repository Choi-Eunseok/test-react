import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "166869073113-knmv18fvlmn90nej8bl034n40dkndl8b.apps.googleusercontent.com";

export default function GoogleButton(){
    const onSuccess = async(response) => {
    	console.log(response);
    
        const { googleId, profileObj : { email, name } } = response;
        
        console.log(googleId);
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}
