import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router'

function Courses() {
  return (
    <>
      <div className="courses">
        <span>
          <div>
            <button>Graphics Design</button>
            <button>Video Editing</button>
            <button>Web Design</button>
            <button>Web Development</button>
            <button>Social Media Marketing</button>
            <button>Content Creation</button>
            <button>Cyber Security</button>
            <button>IT Support</button>
          </div>
        </span>
        <div className="container">
          <div className="wrapper">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            <h2>Graphics Design Full Course</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum asperiores sint reiciendis, in voluptas distinctio! Saepe doloremque, </p>
            <Link to='/course-details'>
            <span>Open Course<FaArrowRight/></span>
            </Link>
          </div>
          <div className="wrapper">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            <h2>Graphics Design Full Course</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum asperiores sint reiciendis, in voluptas distinctio! Saepe doloremque, </p>
            <Link to='/course-details'>
            <span>Open Course<FaArrowRight/></span>
            </Link>
          </div>
          <div className="wrapper">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            <h2>Graphics Design Full Course</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum asperiores sint reiciendis, in voluptas distinctio! Saepe doloremque, </p>
            <Link to='/course-details'>
            <span>Open Course<FaArrowRight/></span>
            </Link>
          </div>
          <div className="wrapper">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            <h2>Graphics Design Full Course</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eum asperiores sint reiciendis, in voluptas distinctio! Saepe doloremque, </p>
            <Link to='/course-details'>
            <span>Open Course<FaArrowRight/></span>
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Courses