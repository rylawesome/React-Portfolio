import React from 'react'
import ProjectSlider from "../ProjectSlider"
import Footer from "../Footer"

function Projects () {
    return (
        <>
        <div className='container mt-5 carousel'>
            <ProjectSlider />
        </div>
        <Footer />
        </>
    );
}

export default Projects;