import React, { useState } from 'react';
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = ["All", "Graphics Design", "Video Editing", "Web Design", "Web Development"];

const coursesData = [
  { id: 1, title: "Graphics Design", category: "Graphics Design", image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930" },
  { id: 2, title: "Master Video Editing", category: "Video Editing", image: "https://i.ytimg.com/vi/1RgfJjN1T34/maxresdefault.jpg" },
  { id: 3, title: "Responsive Web Design", category: "Web Design", image: "https://www.pixelproductionsinc.com/wp-content/uploads/2022/03/web-design-trends.jpg" },
  { id: 4, title: "Full-Stack Web Development", category: "Web Development", image: "https://miro.medium.com/v2/resize:fit:1200/1*dsD8XAJn4b6H5SDwEwqH3g.jpeg" },
];

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === "All" 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <div className="courses-page">
      <div className="courses-header">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Back
        </Link>
      </div>
      
      {/* Category Filter */}
      <div className="category-filter">
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
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>Learn {course.category} with this detailed course.</p>
            <Link to={`/course/${course.id}`}>
              <span>Open Course <FaAngleRight /></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
