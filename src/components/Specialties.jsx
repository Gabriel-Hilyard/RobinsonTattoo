import React from "react";
import ashPortrait from "../assets/AshPortrait.png";
import instagram from "../assets/specialtyIcons/instagram.svg"
import eagle from "../assets/specialtyIcons/eagle.png"
import dragon from "../assets/specialtyIcons/dragon.png"
import cog from "../assets/specialtyIcons/settings.png"
import sword from "../assets/specialtyIcons/sword.png"
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
                    <li>
                        <img src={eagle} alt="eagle icon" className="icon" style={{height: '32px', width: '32px'}}/>
                        American Traditional</li>
                    <li>
                        <img src={dragon} alt="dragon icon" className="icon" style={{height: '32px', width: '32px'}}/>
                        Japanese Traditional</li>
                    <li>
                        <img src={sword} alt="sword icon" className="icon" style={{height: '32px', width: '32px'}}/>
                        Blackwork</li>
                    <li>
                        <img src={cog} alt="cog icon" className="icon" style={{height: '32px', width: '32px'}}/>
                        Custom Flash</li>
                    <li>
                        <img src={instagram} alt="instagram icon" className="icon" style={{height: '32px', width: '32px'}}/>
                        <a href="https://www.instagram.com/robinson.tattoo/" target="_blank" className="instagramHandle">@robinson.tattoo</a></li>
                </ul>
            </div>
          </div>
        </div>
        </>
    );
}

export default Specialties;