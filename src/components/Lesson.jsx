import React from 'react'
import { NavLink } from 'react-router-dom'


const Lesson = () => {
    return (
        <div className="row ">
            <div className="col-12">
                <br></br>
                <hi className="display-6  mb-4">Topics Checklist</hi>
                <hr className='w-25' />
            </div>
            <br></br>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    <b>Business Plan</b>
                </li>
                <li className="list-group-item">
                    Learn how to create the perfect business plan
                </li>
                <li className="list-group-item">
                    <NavLink to="/video" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-video-o me-2'></i> Video</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/audio" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-audio-o me-2'></i> Audio</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/notes" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-text-o me-2'></i> Notes</NavLink>
                </li>
            </ul>
            <br></br>
            <ul className="list-group list-group-horizontal-sm">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    <b>Finance</b>
                </li>
                <li className="list-group-item">
                    Delaing with all the money that goes in and out of the business
                </li>
                <li className="list-group-item">
                    <NavLink to="/video" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-video-o me-2'></i> Video</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/audio" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-audio-o me-2'></i> Audio</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/notes" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-text-o me-2'></i> Notes</NavLink>
                </li>
            </ul>
            <br></br>
            <ul className="list-group list-group-horizontal-md">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    <b>Taxes</b>
                </li>
                <li className="list-group-item">
                    Knowing when to pay taxes and how much
                </li>
                <li className="list-group-item">
                    <NavLink to="/video" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-video-o me-2'></i> Video</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/audio" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-audio-o me-2'></i> Audio</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/notes" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-text-o me-2'></i> Notes</NavLink>
                </li>
            </ul>
            <br></br>
            <ul className="list-group list-group-horizontal-lg">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    <b>Legal</b>
                </li>
                <li className="list-group-item">
                    From registration of the business to the dealing with employees
                </li>
                <li className="list-group-item">
                    <NavLink to="/video" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-video-o me-2'></i> Video</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/audio" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-audio-o me-2'></i> Audio</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/notes" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-text-o me-2'></i> Notes</NavLink>
                </li>
            </ul>
            <br></br>
            <ul className="list-group list-group-horizontal-xl">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    <b>Marketing</b>
                </li>
                <li className="list-group-item">
                    From product development to lauching of the product in the market
                </li>
                <li className="list-group-item">
                    <NavLink to="/video" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-video-o me-2'></i> Video</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/audio" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-audio-o me-2'></i> Audio</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/notes" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-file-text-o me-2'></i> Notes</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Lesson