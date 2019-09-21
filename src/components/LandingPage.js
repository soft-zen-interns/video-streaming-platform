import React from 'react';
import "./LandingPage.css"

const LandingPage = () => {
	return(
		<div style={{ whiteSpace: 'pre-wrap' }}>
			<button className = "buttonSignUp">Sign up</button>
			<button className = "buttonLogin">Login</button>
			<button className = "buttonSubscribe">SUBSCRIBE</button>
			<h2 className = "hOneVideosForFree">{`WATCH MUSIC VIDEOS FOR FREE 
				\nOR SUBSCRIBE FOR ADDITIONAL GENRES`}  </h2>
			<button className = "buttonSignUpForFree">SIGN UP FOR FREE</button>
			<h3 className = "alreadyHaveAnAccount">Already have an account?</h3>
			<button className = "logInIfYouHaveAnAccount">Log in</button>
		</div>
	);
};



export default LandingPage;
