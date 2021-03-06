import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'



const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    //Handle input
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    //handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = user;

        try {

            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            if (res.status === 400 || !res) {
                window.alert("Invalid details")
            }
            else {
                window.alert("Login completed Successfully");
                window.location.reload();
                navigate.push('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form ">
                        <h2 className="display-4 fw-bolder text-white ">Welcome Back!</h2>

                        <p className="lead text-center text-white">Login with your Email and Password</p>

                        <br></br>
                        <br></br>

                        <p className="lead text-center text-white">New here?</p>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me?</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Log in</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login