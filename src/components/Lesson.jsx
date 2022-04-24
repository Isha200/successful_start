import React from 'react'

const Lesson = () => {
    return (
        <div>
            <section id="lesson">
                <div className="container my-5 py-5">
                    <div className="row ">
                        <div className="col-12">
                            <h3 className="fs-5  mb-0"> Lesson Space </h3>
                            <hi className="display-6  mb-4">Learn with your chosen method</hi>
                            <hr className='w-25' />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i class="fa fa-check-square-o fa-4x mb-4 text-primary" aria-hidden="true"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Topics</h5>
                                    <p class="card-text lead">
                                        All the topics you need to learn to start you own business. From <b>business plan</b> to <b>marketing</b> to <b>taxes.</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                <i class="fa fa-file fa-4x mb-4 text-primary" aria-hidden="true"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Methods</h5>
                                    <p class="card-text lead">
                                        Learn the content in the method you prefer!
                                        <br></br> 
                                        <b> Videos, audios or notes.</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i class="fa fa-comments-o fa-4x mb-4 text-primary" aria-hidden="true"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Feedback</h5>
                                    <p class="card-text lead">
                                       Get presonalised feedback from the professionals. Feedback on your
                                       <b> business plan</b> or <b>questions about the content.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lesson