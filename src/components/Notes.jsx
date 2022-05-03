import React from 'react'


function Notes() {


  let url = "https://www.jbs.cam.ac.uk/wp-content/uploads/2020/08/how-to-write-a-business-plan.pdf";
  return ( 
    <section id="notes">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-5">
            <div className='notes jusitify content-center'>
              <h1>Business Plan</h1>
              <br></br>
              <br></br>
              <div className="notes">
                <a href={url}>Business Plan Notes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Notes