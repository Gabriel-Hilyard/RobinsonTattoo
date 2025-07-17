import React from "react";
import "./Footer.css";


function Footer() {
    return (
        <footer>
            <div className="bookingBtn">
         <a href="https://www.instagram.com/robinson.tattoo/" target="_blank">
            <button>Book Now</button></a>
            <p>(DM to book)</p>
            </div>
            <div className="location">
             <div className="mapPreview">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.038186480029!2d-118.15534712276168!3d34.704216772918606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2452ca444cbaf%3A0x8974c37b6c790831!2sPsycho%20City%20Tattooing!5e0!3m2!1sen!2sus!4v1752538951772!5m2!1sen!2sus"
            width="350"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"/>
             </div>
              <h3>1243 W Ave I, Lancaster, CA 93534</h3>
            </div>
              <a href='https://www.linkedin.com/in/gabriel-hilyard-87a583173'>Created by Gabriel Hilyard</a>
              &copy; {new Date().getFullYear()} Robinson Tattoo all rights reserved.
        </footer>
    );
}

export default Footer;