import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'

function Courses() {
  return (
    <>
      <div className="courses">
        <span><Link to='/'><FaArrowLeft/></Link>
        <div>
          <button>Video Editing</button>
          <button>Mixing & Mastering</button>
          <button>Web Development</button>
        </div></span>
        <div className="container">
        </div>
      </div>
    </>
  )
}

export default Courses