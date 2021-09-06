import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "OAuth Web Client ID";

export default function GoogleButton({ onSocial }){
    const onSuccess = async(response) => {
    	console.log(response);
    
        const { googleId, profileObj : { email, name } } = response;
        
        await onSocial({
            socialId : googleId,
            socialType : 'google',
            email,
            nickname : name
        });
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"166869073113-knmv18fvlmn90nej8bl034n40dkndl8b.apps.googleusercontent.com"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}
