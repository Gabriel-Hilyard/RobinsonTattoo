import  { useState, useEffect } from "react";
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
  const carouselImages = [
    eagle, snake, rose, cerberus, executioner, angel,
    fireSnake, barbedwire, thorn, backpiece, japanese, alligator
  ];

  // Track screen width to adjust images per page
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imagesPerPage, setImagesPerPage] = useState(getImagesPerPage(window.innerWidth));
  const [currentPage, setCurrentPage] = useState(0);

  function getImagesPerPage(width) {
    if (width <= 480) return 3;      // Mobile (e.g., 1 row of 3)
    if (width <= 768) return 4;      // Small tablets
    return 6;                        // Desktop (2 rows x 3 cols)
  }

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setImagesPerPage(getImagesPerPage(newWidth));
      setCurrentPage(0); // Reset to first page on layout change
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(carouselImages.length / imagesPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };



    return (


    <div className="carouselWrapper">

      <h1>My Portfolio</h1>
  <div className="carouselContainer">


    <button className="carouselBtn prev" onClick={handlePrev}>&lt;</button>

    <div className="carouselViewport">
    <div
      className="carouselSlider"
      style={{
        transform: `translateX(-${currentPage * 100}%)`,
      }}
    >
      {Array.from({ length: totalPages }).map((_, pageIndex) => {
        const start = pageIndex * imagesPerPage;
        const pageImages = carouselImages.slice(start, start + imagesPerPage);
        const half = Math.ceil(pageImages.length / 2);
        return (
          <div className="carouselPage" key={pageIndex}>
            <div className="carouselRow">
              {pageImages.slice(0, half).map((src, i) => (
                <img key={`top-${i}`} src={src} alt={`tattoo ${i}`} />
              ))}
            </div>
            <div className="carouselRow">
              {pageImages.slice(half).map((src, i) => (
                <img key={`bottom-${i}`} src={src} alt={`tattoo ${i + half}`} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>

  <button className="carouselBtn next" onClick={handleNext}>&gt;</button>
</div>

</div>
    );
}

export default Carousel;