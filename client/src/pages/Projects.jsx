import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
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

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Filter videos based on selected category
  const filteredVideos = selectedCategory === "All"
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <>
      <div className="portfolio-page">
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
            <div key={video.id} className="video-item" onClick={() => setSelectedVideo(video)}>
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

        {/* Video Modal */}
        {selectedVideo && (
          <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedVideo(null)}>✖</button>
              <iframe
              
                width="100%"
                height="500"
                src={selectedVideo.src}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p>{selectedVideo.title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .video-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .video-item {
          cursor: pointer;
          transition: transform 0.2s;
        }
        .video-item:hover {
          transform: scale(1.05);
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 80%;
          text-align: center;
          position: relative;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: red;
          color: white;
          border: none;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}

export default Projects;
