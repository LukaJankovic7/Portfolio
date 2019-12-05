import React from 'react';
import HeaderStyles from './styles/header.css';

const Header = () => {
    return (
        <div className={HeaderStyles.header}>
            <ul className={HeaderStyles.NavBar}>
                <a href="#Intro"><li>Intro</li></a>
                <a href="#About"><li>About</li></a>
                <a href="#Projects"><li>Projects</li></a>
                <a href="#Footer"><li>Contact</li></a>
            </ul>
        </div>
    )
}

export default Header