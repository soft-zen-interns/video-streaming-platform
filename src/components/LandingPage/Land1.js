import React from 'react';
import '../../styles/LandingPage/Land1.css';

const LandingPage = () => {
    return (
        <div>
            <hr/>
            <div className="firstSection">
                <div id="header">
                    <span id = "sbsButton"><button id="subscribeBtn"><span id="subscribeTxt">SUBSCRIBE</span></button></span>
                </div>
                <div id="text"><p>WATCH MUSIC VIDEOS FOR FREE OR SUBSCRIBE TO ADDITIONAL GENRES.</p></div>
                <div><button id="signUpBtn"><span id="signUpTxt">SIGN UP FREE</span></button></div>
            </div>
        </div>
    );
};
export default LandingPage;