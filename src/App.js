import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "923935736935-adsccgburpt4msi1h0g0ag0h7fab6v3h.apps.googleusercontent.com";

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
