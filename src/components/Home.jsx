import React from 'react'

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
        </div>
    )
}

export default Home
