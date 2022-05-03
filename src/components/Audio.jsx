import React from 'react'
import VideoPlayer from "react-video-js-player"
import sound from "./audio.mp4";

function Audio() {

  return (
    
      <section id="video">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Business Plan</h1>
              <div className='video jusitify content-center'>
                <h1>Business Plan</h1>
                <br></br>
                <br></br>
                <VideoPlayer
                  src={sound}
                  width="720"
                  height="420"
                />
              </div> 
            </div>
          </div>
          </div>
      </section>
    

  )
}

export default Audio