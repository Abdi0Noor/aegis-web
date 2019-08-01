import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../static/img/header/carbon-fiber-genji.png";

const stylingHero = {
    backgroundImage: "url('/static/img/header/KRheroG.jpg')",
   
}

const Hero = () => (
    <div className="Hero" style={stylingHero}>
        <img className="genji-png" src={Logo}/>
        <div className="heroText">
        <h1 className="heroHead">AEGIS</h1>
        <p className="heroP">come hang out</p>
        <button className="all-btn draw-border">Join The Discord</button>
        <button className="all-btn draw-border">Join The Team</button>
    </div>
        
    </div>
)

export default Hero;