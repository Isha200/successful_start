import React from 'react'
import About from './About'


const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                                Learning + Networking</h1>
                            <p className="lead text-center mb-5 text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Nulla quod neque incidunt totam sint, molestiae expedita quas voluptate dolorum,
                                possimus vel nihil amet illum deleniti soluta nobis. Nostrum aliquam tenetur eum
                                expedita ratione voluptatibus, cumque vitae pariatur earum nesciunt, incidunt quos
                                ipsum culpa, consectetur itaque est illum non animi dignissimos.
                            </p>

                            {/* <div className="buttons d-flex rounded-pill justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Login</button>
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Register</button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </section>
            <About />
            {/* <Lesson />
            <Network /> */}
            {/* LESSON SPACE */}
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
            {/* NETWORK SPACE */}
            <div>
            <section id="network">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assests/investor1.jpg" alt="About"
                                className='w-75 mt-5' />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">Network</h3>
                            <h1 className="display-6 mb-2">Investors</h1>
                            <hr className='w-50' />
                            <p className="lead mb-4">
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Obcaecati ipsum molestias
                                aliquid quas fuga alias fugiat tempore,
                                placeat nostrum odit eos exercitationem
                                consectetur! Voluptatem aliquam expedita 
                                porro autem doloribus voluptates exercitationem 
                                nam quas, veniam sunt, ea qui debitis quisquam 
                                blanditiis in ex, cum recusandae unde deleniti 
                                consequuntur. Optio, nemo laudantium.</p>
                            {/* <button className="btn btn-outline-primary rounded-pill py-2">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        
        
    );
}

export default Home
