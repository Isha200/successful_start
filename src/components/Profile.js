import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="container emp-profile my-5 py-5">
            <form method="">
                <div className="row">
                    <div className="col-md-5">
                        <img src="/assests/profilePic.jpg" alt="profile" className='w-75 mt-4' />
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h4 class="card-title mb-3 fs-4 fw-bold">Information</h4>
                            <div className="col-md-6">
                                <div class="card p-3">
                                    <div class="card-body text-center">
                                        <i class="fa fa-check-square-o fa-4x mb-4 text-primary" aria-hidden="true"></i>
                                        <p> Full Name : <b>Isha Upadhyay</b></p>
                                        <p> Email address: <b>Isha@gmail.com</b></p>
                                        <p>Role: <b>Student</b></p>
                                        <p>Business interest: <b>Ecommerce</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='profile-work'>
                            <br></br>
                            <NavLink to="" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                <i className='fa fa-pencil-square-o me-2'></i>Edit Profile</NavLink>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Profile;