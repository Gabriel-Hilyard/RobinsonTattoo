import React from "react";
import AshFlash from "../assets/AshFlash.png";

function Hero() {
    return (
        <section>
            <div className="heroImage">
                <img src={AshFlash}/>
            </div>
            <div className="nameLocation">
                <h1>Ash Robinson</h1>
                <h2>Lancaster, CA</h2>
            </div>
            <div className="heroParagraph">
                <h3>My name is Ash Robinson, I’ve been tattooing for close to 
                    three years. I was born and raised in Lancaster, CA and 
                    that’s where I’m currently tattooing. My favorite work is 
                    Bold American Traditional. My passion for tattooing is what 
                    drives me to ensure that my work is always excellent. </h3>
            </div>
            <div className="bookingBtn"></div>
        </section>
    );
}

export default Hero;