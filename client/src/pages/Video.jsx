import React from 'react'

function Video() {
  return (
    <>
    <div className="video">
        <div className="container">
            <div className="wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=NUij_IpeAyqlEpgc&amp;list=PLrEDJjV85iv4xU8PTIG1Bq9TA6rwP1HWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    </>

  )
}

export default Video