import React from 'react';
import logo from '../../img/ron_logo.png';

function NavBar() {
    return (
        <div>
            <header className="nav-bar">
            <img src={logo} className="logo" alt="logo" style={logoStyle}/>
            
            <div>
                <ul className="nav-links">
                    <li><a href="https://ronyonka.github.io"><strong>Home</strong></a></li>
                    <li><a href="https://ronyonka.github.io"><strong>About</strong></a></li>
                    <li><a href="https://ronyonka.github.io"><strong>Services</strong></a></li>
                    <li><a href="https://ronyonka.github.io"><strong>Projects</strong></a></li>
                    <li><a href="https://ronyonka.github.io"><strong>Blog</strong></a></li>
                    <li><a href="https://ronyonka.github.io"><strong>Contact</strong></a></li>
                </ul>
            </div>
            </header>
        </div>
    )
}
// const headingStyle = {
//     color: '#fff'
// }
const logoStyle = {
    height: '130px',
    width: 'auto'
}
export default NavBar;