import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css'

function ProjectSlider() {
    var Pro1 = 'https://raw.githubusercontent.com/chidibangzz/ProGamer/master/ProGamer%20Demo.PNG'
    var Pro1Link = 'https://github.com/chidibangzz/ProGamer'
    var Pro2 = 'https://raw.githubusercontent.com/rylawesome/PWA---Online-Offline-Budget-Tracker/main/BudgetAppEx.JPG'
    var Pro2Link = 'https://github.com/rylawesome/PWA---Online-Offline-Budget-Tracker'
    var Pro3 = 'https://raw.githubusercontent.com/rylawesome/Employee-Directory/main/EmployeeDirectoryEx.JPG'
    var Pro3Link = 'https://github.com/rylawesome/Employee-Directory'
    var Pro4 = 'https://raw.githubusercontent.com/rylawesome/Weather-Dashboard/main/WeatherDashScreenshot.JPG'
    var Pro4Link = 'https://github.com/rylawesome/Weather-Dashboard'
    var Pro5 = 'https://raw.githubusercontent.com/rylawesome/Team-Builder/main/TeamBuilderEx.JPG'
    var Pro5Link = 'https://github.com/rylawesome/Team-Builder'
    var Pro6 = 'https://raw.githubusercontent.com/rylawesome/RJQ_PasswordGenerator/main/WorkingSite.JPG'
    var Pro6Link = 'https://github.com/rylawesome/RJQ_PasswordGenerator'
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img className="slider-img" src={Pro1} />
                    </div>
                </div>
                <div className="details">
                    <h2><a href={Pro1Link}>ProGamer</a></h2> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img className="slider-img" src={Pro2} />
                    </div>
                </div>
                <div className="details">
                    <h2><a href={Pro2Link}>Online-Offline Budget App</a></h2> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img className="slider-img" src={Pro3} />
                    </div>
                </div>
                <div className="details">
                    <h2><a href={Pro3Link}>Employee Directory</a></h2> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img className="slider-img" src={Pro4} />
                    </div>
                </div>
                <div className="details">
                    <h2><a href={Pro4Link}>Weather Forecast</a></h2> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img className="slider-img" src={Pro5} />
                    </div>
                </div>
                <div className="details">
                    <h2><a href={Pro5Link}>Team Builder</a></h2> 
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img className="slider-img" src={Pro6} />
                    </div>
                </div>
                <div className="details">
                    <h2><a href={Pro6Link}>Password Generator</a></h2> 
                </div>
            </div>
        </Slider>
    );
}

export default ProjectSlider