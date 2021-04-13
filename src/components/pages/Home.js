import React from 'react'
import ImageSlider from "../Slider"
import Footer from "../Footer"

function Home () {
    return (
        <>
        <div className='container mt-5 carousel'>
            <ImageSlider />
        </div>
        <Footer />
        </>
    );
}

export default Home;