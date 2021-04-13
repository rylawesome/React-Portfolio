import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    var resumeLink = 'https://drive.google.com/file/d/1DyNDuoLk2mfqx0YeMi9_Q1y3w8Uf7BlX/view?usp=sharing';
    var linkedIn = 'https://www.linkedin.com/in/ryland-quirk-1951b2176';
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul className='nav-menu'>
                        <li className='nav-link-home'>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links'>
                               Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a target="_blank" href={resumeLink} className='nav-links'>
                                Resume
                            </a>
                        </li>
                        <li className='nav-item'>
                        <a target="_blank" href={linkedIn} className='nav-links'>
                                LinkedIn
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar