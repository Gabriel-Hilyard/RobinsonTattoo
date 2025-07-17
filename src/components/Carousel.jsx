import React from "react";
import {useState} from "react";
import placeHolder from "../assets/placeholder9-16.jpg";
import "./Carousel.css";

function Carousel() {

    //array of images 
    let carouselImages = [
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
    ];
    //image index state
    const [currentIndex, setCurrentIndex] = useState(0)
    // images displayed at one time, 2 rows 3 columns
    const imagesPerPage = 6;
    //Slicing array 
    const visibleImages = carouselImages.slice(currentIndex, currentIndex + imagesPerPage)


    const handleNext = ( ) => {
        const nextIndex = currentIndex + imagesPerPage;
        if (nextIndex < images.length) {
            setCurrentIndex(0);
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
    <div>
        <button onClick={handlePrev}>&lt;</button>

        <div>
            <div>
                {visibleImages.slice(0,3).map((src, i) => (
                    <img key={i} src={src} alt={`tattoo ${i}`} width="150" />
                ))}
            </div>
            <div>
                {visibleImages.slice(3, 6).map((src, i) => (
                    <img key={i + 3} src={src} alt={`tattoo ${i}`} width="150"/>
                ))}
            </div>
        </div>
        <button onClick={handleNext}>&gt;</button>
    </div>
    );
}

export default Carousel;