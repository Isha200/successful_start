import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
       <div>
                <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center form">
                        <h2 className="display-4 fw-bolder">Welcome Back!</h2>

                        <p className="lead text-center">Login with your Email and Password</p>

                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50"></NavLink>
                    </div>
                </div>
            </div>

            </div>
            )
}

            export default Login