import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    var insta = 'https://www.instagram.com/spilledpizza/';
    var facebook = 'https://www.facebook.com/ryland.quirk';
    var github = 'https://github.com/rylawesome';
    var linkedIn = 'https://www.linkedin.com/in/ryland-quirk-1951b2176';
    return (
        <>
        <div className='footer-container'>
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                <a target='_blank' href={insta}>Instagram</a>
                <a target='_blank' href={facebook}>Facebook</a>
                <a target='_blank' href={github}>Github</a>
                <a target='_blank' href={linkedIn}>LinkedIn</a>
            </div>
            <div className='footer-link-items'>
                <h2>Contact Me</h2>
                <p>quirk2580@gmail.com</p>
                <p>512-468-9809</p>
            </div>
        </div>
        </>
    );
}

export default Footer;