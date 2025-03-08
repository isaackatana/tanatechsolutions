import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'

function Courses() {
  return (
    <>
      <div className="courses">
        <span><Link to='/'><FaArrowLeft/></Link>
        <div>
          <button>Graphics Design</button>
          <button>Video Editing</button>
          <button>Web Design</button>
          <button>Web Development</button>
          <button>Social Media Marketing</button>
          <button>Content Creation</button>
          <button>Cyber Security</button>
          <button>IT Support</button>
        </div></span>
        <div className="container">
        </div>
      </div>
    </>
  )
}

export default Courses