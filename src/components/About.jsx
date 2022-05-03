import React from 'react'

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assests/about1.jpg" alt="About"
                                className='w-75 mt-5' />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who are we?</h1>
                            <hr className='w-50' />
                            <p className="lead mb-4">
                                Small businesses, whether they are online or not,
                                experience more hardship breaking into the market
                                in comparison to a larger scale business. Larger
                                scale businesses usually have a wider scope, a
                                bigger budget or a range of guidance and support
                                available for them.</p>
                            <p className="lead mb-4">
                                Made for enthusiastic people who are passionate about owning
                                and running their own business but have no experience
                                or knowledge or the correct guidance to start from scratch</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About 