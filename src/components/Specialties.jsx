import React from "react";
import ashPortrait from "../assets/AshPortrait.png";
import "./Specialties.css";

function Specialties() {
    return (
        <>
        <div className="specialtyCard">
            <div className="imgContainer">
             <img src={ashPortrait} 
             style={{height: "300px" }}/>
            </div>
            <div className="titleDescription">
                <h1>Specialties</h1>
                
            
            
            <div className="specialtyList">
                <ul>
                    <li>American Traditional</li>
                    <li>Fine Line</li>
                    <li>Blackwork</li>
                    <li>Custom Flash</li>
                    <li><a href="https://www.instagram.com/robinson.tattoo/" target="_blank">@robinson.tattoo</a></li>
                </ul>
            </div>
          </div>
        </div>
        </>
    );
}

export default Specialties;