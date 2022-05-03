import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container">
                    <NavLink className="navbar-brand fw-bolder fs-4 " to="/">Successful Start</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active me-2" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/lesson">Lesson space</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/network">Network</NavLink>
                            </li>
                        </ul>

                        <NavLink to="/profile" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                            <i className='fa fa-user me-2'></i>Profile</NavLink>

                        <NavLink to="/login" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                            <i className='fa fa-sign-out me-2'></i>Log in</NavLink>

                        <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                            <i className='fa fa-user-plus me-2'></i>Register</NavLink>

                        {/* <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                            <i className='fa fa-sign-out me-2'></i>Log out</NavLink> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar