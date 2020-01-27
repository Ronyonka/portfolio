import React from 'react';
import ron from '../../img/ron.png';
import rectangle from '../../img/rectangle.png';

function HomePage() {
    return (
        <div className="landing-page">
            <div className="heading">
            <img src={rectangle} style={rectangleStyle} alt="my profile"/>
            <h1 style={headingStyle}>Hello, I am<br />  Ron Onyonka</h1>
            {/* <button className="btn">Read More</button> */}
            <button className="learn-more">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
            </button>
            </div>
            
            <img src={ron} className="picture" style={imageStyle} alt="logo"/>
        </div>
    )
}

const headingStyle = {
    color: '#ffffff',
    'font-weight' : '700',
    'font-size' : '65px',
    'margin-top' : '8px'
}

const imageStyle = {
    width: '500px',
    height: 'auto'
}

const rectangleStyle = {
    width: '80px',
    height: '4px'
}

export default HomePage;