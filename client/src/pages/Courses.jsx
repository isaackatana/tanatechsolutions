import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
  "All", 
  "Graphics Design", 
  "Video Editing", 
  "Web Design", 
  "Web Development", 
  "Social Media Marketing", 
  "Content Creation", 
  "Cyber Security", 
  "IT Support"
];

const coursesData = [
  { title: "Graphics Design Full Course", category: "Graphics Design", image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930" },
  { title: "Master Video Editing", category: "Video Editing", image: "https://i.ytimg.com/vi/1RgfJjN1T34/maxresdefault.jpg" },
  { title: "Responsive Web Design", category: "Web Design", image: "https://www.pixelproductionsinc.com/wp-content/uploads/2022/03/web-design-trends.jpg" },
  { title: "Full-Stack Web Development", category: "Web Development", image: "https://miro.medium.com/v2/resize:fit:1200/1*dsD8XAJn4b6H5SDwEwqH3g.jpeg" },
  { title: "Social Media Marketing Basics", category: "Social Media Marketing", image: "https://www.adlibweb.com/wp-content/uploads/2020/11/Social-Media-Marketing.png" },
  { title: "Content Creation & Strategy", category: "Content Creation", image: "https://i.ytimg.com/vi/HdS8pBqFGZ0/maxresdefault.jpg" },
  { title: "Cyber Security Essentials", category: "Cyber Security", image: "https://www.computerhope.com/jargon/c/cybersecurity.jpg" },
  { title: "IT Support & Troubleshooting", category: "IT Support", image: "https://www.fieldengineer.com/wp-content/uploads/2023/07/IT-Support.jpg" },
];

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = selectedCategory === "All" 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <div className="courses-page">
      
      {/* Category Filter Buttons */}
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="courses-grid">
        {filteredCourses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>Learn the fundamentals of {course.category} with this detailed course.</p>
            <Link to="/course-details">
              <span>Open Course <FaAngleRight/></span>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Courses;
