import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';



const Register = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/register";
            const { data: res } = await axios.post(url, data);
            navigate("/profile")
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response <= 500) {
                setError(error.response.data.message)
            }
        }
    }


    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form order-2">
                        <h2 className="display-4 fw-bolder text-white ">Welcome</h2>

                        <p className="lead text-center text-white">Register with only your Name, Email and Password</p>

                        <br></br>
                        <br></br>

                        <p className="lead text-center text-white">Already have an account?</p>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Log in</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Register</h1>
                        <form onSubmit={handleSubmit} >
                            <div class="mb-3">
                                <label for="exampleInputName1" class="form-label">Full Name</label>
                                <input
                                    type="text"
                                    placeholder='Full Name'
                                    name='name'
                                    value={data.name}
                                    required
                                    onChange={handleChange}
                                    class="form-control"
                                    id="exampleInputName1"
                                    aria-describedby="nameHelp"
                                />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    name='email'
                                    value={data.email}
                                    required
                                    onChange={handleChange}
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <div
                                    id="emailHelp"
                                    class="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    value={data.password}
                                    required
                                    onChange={handleChange}
                                    class="form-control"
                                    id="exampleInputPassword1"

                                />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me?</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register