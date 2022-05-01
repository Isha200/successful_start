import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    //Handle inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    //Handle Submit 
    const handleSubmit = async (event) => {
        event.preventDefault();
        //object Destructing
        //store object data into variable
        const { username, email, password } = user;

        try {
            //It is Submitted on port 3000 by default 
            // Which is frontend 
            //Proxy needed for backend
            const res = await fetch('/register', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })

            if (res.status === 400 || !res) {
                window.alert("Already Used Details")
            }
            else {
                window.alert("Registration completed Successfully");
                navigate.push('/login')
            }
        } catch (error) {
            console.log(error);
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
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                <label for="exampleInputName1" class="form-label">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputName1"
                                    name="username"
                                    value={user.username}
                                    onChange={handleInput}
                                />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}
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
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInput}
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