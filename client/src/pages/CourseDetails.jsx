import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaLock } from 'react-icons/fa';

function CourseDetails({ isLoggedIn }) {
  const courseVideos = [
    { id: 1, title: 'Introduction', url: 'https://www.youtube.com/embed/876aSEUA_8c?si=peyJD9C5ePTlzHNR' },
    { id: 2, title: 'Lesson 1 - Basics', url: 'https://www.youtube.com/embed/abcd1234' },
    { id: 3, title: 'Lesson 2 - Intermediate', url: 'https://www.youtube.com/embed/wxyz5678' },
    { id: 4, title: 'Lesson 3 - Advanced', url: 'https://www.youtube.com/embed/efgh9101' }
  ];

  const [currentVideo, setCurrentVideo] = useState(1);

  useEffect(() => {
    const savedProgress = localStorage.getItem('lastWatched');
    if (savedProgress) {
      setCurrentVideo(parseInt(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lastWatched', currentVideo);
  }, [currentVideo]);

  const nextVideo = () => {
    if (currentVideo < courseVideos.length) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  const prevVideo = () => {
    if (currentVideo > 1) {
      setCurrentVideo(currentVideo - 1);
    }
  };

  return (
    <div className="course-details">
      <div className="container">
        <div className="video-wrapper">
          {currentVideo === 1 || isLoggedIn ? (
            <iframe
              width="100%"
              height="400px"
              src={courseVideos[currentVideo - 1].url}
              title="Course Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="locked-content">
              <FaLock size={50} />
              <p>Please log in to access this video.</p>
            </div>
          )}
          <div className="video-navigation">
            <button onClick={prevVideo} disabled={currentVideo === 1}>
              <FaArrowLeft /> Previous
            </button>
            <button onClick={nextVideo} disabled={currentVideo === courseVideos.length}>
              Next <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="lesson-list">
          {courseVideos.map((video) => (
            <div
              key={video.id}
              className={`lesson-item ${currentVideo === video.id ? 'active' : ''}`}
              onClick={() => isLoggedIn || video.id === 1 ? setCurrentVideo(video.id) : null}
            >
              <FaPlay />
              <span>{video.title}</span>
              {video.id !== 1 && !isLoggedIn && <FaLock className="lock-icon" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
