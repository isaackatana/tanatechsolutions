import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaLock, FaPlay } from 'react-icons/fa';

const coursesData = [
  {
    id: 1,
    title: "Graphics Design",
    category: "Graphics Design",
    price: "$49",
    duration: "10 Hours",
    level: "Beginner",
    image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930",
    lessons: [
      { id: 1, title: "Introduction to Graphics Design", duration: "10 min", url: "https://www.youtube.com/embed/876aSEUA_8c" },
      { id: 2, title: "Basic Tools & Techniques", duration: "20 min", url: "https://www.youtube.com/embed/abcd1234" },
      { id: 3, title: "Color Theory", duration: "15 min", url: "https://www.youtube.com/embed/wxyz5678" },
      { id: 4, title: "Typography Basics", duration: "25 min", url: "https://www.youtube.com/embed/efgh9101" }
    ]
  }
];

// Simulated User Authentication & Payment Status
const isLoggedIn = false;  // Change to true if user is logged in
const hasPaid = false;  // Change to true if user has purchased the course

function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find((c) => c.id === parseInt(courseId));

  const [currentVideo, setCurrentVideo] = useState(course?.lessons[0]?.url);

  if (!course) return <h2>Course not found</h2>;

  const handleLessonClick = (lesson) => {
    if (lesson.id === 1 || (isLoggedIn && hasPaid)) {
      setCurrentVideo(lesson.url);
    } else {
      alert("Please log in and purchase the course to access this lesson.");
      navigate(`/enroll/${course.id}`);
    }
  };

  return (
    <div className="course-details">
      {/* Course Header */}
      <div className="course-header">
        <img src={course.image} alt={course.title} />
      </div>

      <section>

      

        {/* Video Player */}
        <div className="video-preview"><div className="course-info">
          <h1>{course.title}</h1>
          <p>Category: {course.category}</p>
          <p>Price: {course.price}</p>
          <p>Duration: {course.duration}</p>
          <p>Level: {course.level}</p>
        </div>

        </div>

        <div>

        <iframe
            src={currentVideo}
            title="Course Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Course Lessons */}
        <div className="lessons-list">
          <h2>📚 Lessons</h2>
          <ul>
            {course.lessons.map((lesson) => (
              <li key={lesson.id} className={`lesson-item ${currentVideo === lesson.url ? 'active' : ''}`} onClick={() => handleLessonClick(lesson)}>
                <div>
                  <FaPlay />
                  <span>{lesson.title} - ⏱️ {lesson.duration}</span>
                </div>
                {lesson.id !== 1 && (!isLoggedIn || !hasPaid) && <FaLock className="lock-icon" />}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => navigate(`/enroll/${course.id}`)}>Enroll Now</button>
        <br />
        <Link to="/courses">← Back to Courses</Link>
        </div>


      </section>
      
    </div>
  );
}

export default CourseDetails;
