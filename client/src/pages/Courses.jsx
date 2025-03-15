import React from 'react'
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router'

function Courses() {
  return (
    <>
      <div className="courses">
        <span>
          <div>
            <button>Graphics&nbsp;Design</button>
            <button>Video&nbsp;Editing</button>
            <button>Web&nbsp;Design</button>
            <button>Web&nbsp;Development</button>
            <button>Social&nbsp;Media&nbsp;Marketing</button>
            <button>ContentCreation</button>
            <button>CyberSecurity</button>
            <button>ITSupport</button>
          </div>
        </span>
        <div className="container">
          <div className="wrapper">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            <h2>Graphics Design Full Course</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum asperiores sint reiciendis, in voluptas distinctio! Saepe doloremque, </p>
            <Link to='/course-details'>
            <span>Open Course<FaAngleRight/></span>
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Courses