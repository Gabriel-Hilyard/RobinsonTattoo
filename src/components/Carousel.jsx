import React from "react";
import {useState} from "react";
import eagle from "../assets/eagleTattoo.jpg"
import snake from "../assets/snakeTattoo.jpg"
import rose from "../assets/roseTattoo.jpg"
import cerberus from "../assets/cerberusTattoo.jpg"
import executioner from "../assets/executionerTattoo.jpg"
import angel from "../assets/angelTattoo.jpg"
import fireSnake from "../assets/fireSnakeTattoo.jpg"
import barbedwire from "../assets/barbedwireTattoo.jpg"
import thorn from "../assets/thornTattoo.jpg"
import backpiece from "../assets/backpieceTattoo.jpg"
import japanese from "../assets/japaneseTattoo.jpg"
import alligator from "../assets/alligatorTattoo.jpg"
import "./Carousel.css";

function Carousel() {

    //array of images 
    let carouselImages = [
        eagle,
        snake,
        rose,
        cerberus,
        executioner,
        angel,
        fireSnake,
        barbedwire,
        thorn,
        backpiece,
        japanese,
        alligator,
    ];
    //image index state
    const [currentIndex, setCurrentIndex] = useState(0)
    // images displayed at one time, 2 rows 3 columns
    const imagesPerPage = 6;
    //Slicing array 
    const visibleImages = carouselImages.slice(currentIndex, currentIndex + imagesPerPage)


    const handleNext = ( ) => {
        const nextIndex = currentIndex + imagesPerPage;
        if (nextIndex < carouselImages.length) {
            setCurrentIndex(nextIndex);
        } else {
            setCurrentIndex(0); //looping to start
        }
    };

    const handlePrev = () => {
        const prevIndex = currentIndex - imagesPerPage;
        if (prevIndex >= 0) {
            setCurrentIndex(prevIndex);
        } else {
            setCurrentIndex(images.length - imagesPerPage);
        }
    };


    return (
    <div className="carouselContainer">
        <button onClick={handlePrev}>&lt;</button>

        <div className="carouselRows">
            <div className="carouselRow">
                {visibleImages.slice(0,3).map((src, i) => (
                    <img key={i} src={src} alt={`tattoo ${i}`} border="solid 1px black" width="300" />
                ))}
            </div>
            <div className="carouselRow">
                {visibleImages.slice(3, 6).map((src, i) => (
                    <img key={i + 3} src={src} alt={`tattoo ${i}`} width="300"/>
                ))}
            </div>
        </div>
        <button onClick={handleNext}>&gt;</button>
    </div>
    );
}

export default Carousel;