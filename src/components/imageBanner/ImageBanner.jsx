import React from 'react';
import './ImageWithBanner.css';

function ImageBanner({ text }) {
    return (
        <div className="image-text-container">
            <img src={'/img.png'} alt="Background" className="background-image" />
            <div className="centered-text">{text}</div>
        </div>
    );
}

export default ImageBanner;
