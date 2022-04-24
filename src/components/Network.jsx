import React from 'react'

const Network = () => {
    return (
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
    )
}

export default Network