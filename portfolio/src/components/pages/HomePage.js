import React from 'react';
import ron from '../../img/ron.png';
import rectangle from '../../img/rectangle.png';

function HomePage() {
    return (
        <div className="landing-page">
            <div className="heading">
            <img src={rectangle} style={rectangleStyle}/>
            <h1 style={headingStyle}>Hello, I am<br />  Ron Onyonka</h1>
            <button className="btn">Read More</button>
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