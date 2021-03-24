import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

export const Facebook = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userID, setUserID] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [picture, setPicture] = useState('');

	const responseFacebook = (response) => {
		setIsLoggedIn(true);
		setUserID(response.userID);
		setName(response.name);
		setEmail(response.email);
		setPicture(response.picture.data.url);
	};

	const componentClicked = () => {
		console.log('clicked');
	};
	let fbContent;
	if (isLoggedIn) {
        fbContent = (
            <div style={{
                width: '400px',
                margin: 'auto',
                background: '#222',
                padding: '20px'
            }}>
                <img src={picture} alt={name}></img>
                <h2>Welcome, {name}</h2>
                Email: {email}
            </div>
        );
	} else {
		fbContent = (
			<FacebookLogin
				appId='496435738036979'
				autoLoad={true}
				fields='name,email,picture'
				onClick={componentClicked}
				callback={responseFacebook}
			/>
		);
	}
	return <div>{fbContent}</div>;
};
