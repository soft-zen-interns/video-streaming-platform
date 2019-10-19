import React from 'react';
import '../../styles/LandingPage/Land1.css';
import genreBtn from '../../imgs/GenreBtn.png';


const LandingPage = () => {
    return (
        <div>
            <hr/>
            <div className="firstSection">
                <div id="header">
                    <span id = "sbsButton"><button id="subscribeBtn"><span id="subscribeTxt">SUBSCRIBE</span></button></span>
                    <span id = "loginButton"><button id="loginBtn"><span id="loginTxt">Log in</span></button></span>
                    <span id = "loginButton"><button id="loginBtn"><span id="loginTxt">Sign Up</span></button></span>
                </div>
                <div id="text"><p>WATCH MUSIC VIDEOS FOR FREE OR SUBSCRIBE TO ADDITIONAL GENRES.</p></div>
                <div><button id="signUpBtn"><span id="signUpTxt">SIGN UP FREE</span></button></div>
            </div>
            <div className="browseGenresSection">
                <div id="text"><p>BROWSE GENRES</p></div>
                <div id="buttons">
                    <button className="genreBtn"> <img src={genreBtn} alt="genre" className = "genreImage"/></button>
                    <button className="genreBtn"> <img src={genreBtn} alt="genre" className = "genreImage"/></button>
                    <button className="genreBtn"> <img src={genreBtn} alt="genre" className = "genreImage"/></button>
                    <button className="genreBtn"> <img src={genreBtn} alt="genre" className = "genreImage"/></button>
                    <button className="genreBtn"> <img src={genreBtn} alt="genre" className = "genreImage"/></button>
                    <button className="genreBtn"> <img src={genreBtn} alt="genre" className = "genreImage"/></button>
                </div>
            </div>
        </div>
    );
};
export default LandingPage;