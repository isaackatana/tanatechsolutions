import React, { useState } from 'react';
import { FaArrowLeft, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const videoCategories = [
  { name: "All" },
  { name: "Music Videos" },
  { name: "Songs" },
  { name: "Adverts" }
];

const videos = [
  { id: 1, src: "https://www.youtube.com/embed/YI3vEw3Xzwo", title: "Music Video 1", category: "Music Videos" },
  { id: 2, src: "https://www.youtube.com/embed/a5xMtNkjz-0", title: "Music Video 2", category: "Music Videos" },
  { id: 3, src: "https://www.youtube.com/embed/VyVVl_d2yZI", title: "Song 1", category: "Songs" },
  { id: 4, src: "https://www.youtube.com/embed/GNioxp0RCmk", title: "Song 2", category: "Songs" },
  { id: 5, src: "https://www.youtube.com/embed/LxcmF_Kk0Ho", title: "Advert 1", category: "Adverts" },
  { id: 6, src: "https://www.youtube.com/embed/example123", title: "Advert 2", category: "Adverts" }
];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter videos based on selected category
  const filteredVideos = selectedCategory === "All"
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <>
      {/* Header with Navigation Buttons */}
      <div className="portfolio-header">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Back
        </Link>
      </div>

      {/* Video Category Filter */}
      <div className="video-categories">
        {videoCategories.map((category, index) => (
          <button 
            key={index} 
            className={selectedCategory === category.name ? "active" : ""}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Video List */}
      <div className="video-grid">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-item">
            <iframe
              width="100%"
              height="250"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
