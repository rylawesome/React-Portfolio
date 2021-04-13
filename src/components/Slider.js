import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

function ImageSlider() {
    var coverImage = 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/130707115_10157923146616538_7258490596842868534_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=D3byf_ops7MAX-EoC14&_nc_ht=scontent-dfw5-1.xx&oh=72d646b9f966e421dd1401a167abff06&oe=609A9C83'
    var featured = 'https://raw.githubusercontent.com/rylawesome/PWA---Online-Offline-Budget-Tracker/main/BudgetAppEx.JPG'
    var featuredLink = 'https://github.com/rylawesome/PWA---Online-Offline-Budget-Tracker';
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className='card-wrapper'>
                <div className="card">
                    <div className='card-image'>
                        <img className="slider-img" src={coverImage} />
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img className="slider-img" src={featured} />
                    </div>
                </div>
                <div className="details">
                    <h2><a href={featuredLink}>Online-Offline Budget App</a></h2> 
                </div>
            </div>
        </Slider>
    );
}

export default ImageSlider