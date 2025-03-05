import React from 'react'
import { FaArrowLeft, FaList } from 'react-icons/fa';
import { Link } from 'react-router';

function Portfolio() {
  const videos = [
    { id: 1, src: "https://www.youtube.com/embed/YI3vEw3Xzwo?si=S5NJAEu3s65B4XCC" },
    { id: 2, src: "https://www.youtube.com/embed/a5xMtNkjz-0?si=PjVif6lyr4q-ofg6" },
    { id: 3, src: "https://www.youtube.com/embed/VyVVl_d2yZI?si=tCkIsBx4tKwAw0hP" },
    { id: 4, src: "https://www.youtube.com/embed/GNioxp0RCmk?si=oe0pfkIBgNL1UGPm" },
    { id: 5, src:  "https://www.youtube.com/embed/LxcmF_Kk0Ho?si=tyi8P1L0rhjln1Ap"},
  ];
  return (
    <>
    <div className="video">
      <span><Link to='/'><FaArrowLeft/></Link>
      <div>
        <button>Photos</button>
        <button>Music Videos</button>
        <button>Films</button>
        <button>Adverts</button>
      </div>
      </span>
      <div className="container">
          {videos.map((video)=>(
          <div className="wrapper">
            <iframe width="560" height="315" src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          ))}
      </div>
    </div>
    </>

  )
}

export default Portfolio