import React from 'react'
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa'

function CourseDetails() {
  return (
    <>
    <div className="course-details">
        <div className="container">
            <div className="wrapper2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/876aSEUA_8c?si=peyJD9C5ePTlzHNR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div>
                    <button><FaArrowLeft/>Previous </button>
                    <button>Next <FaArrowRight/></button>
                </div>
            </div>
            <div className="wrapper1">
                <span><FaPlay/>Introduction</span>
                <span><FaPlay/>Introduction</span>
                <span><FaPlay/>Introduction</span>
                <span><FaPlay/>Introduction</span>
                <span><FaPlay/>Introduction</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default CourseDetails