import React from 'react'
import {
    FaFacebookF,
    FaDribbble,
    FaLinkedinIn,
    FaInstagram,
    FaBehance,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
function Navbar() {
    return (
        <>
            
            <nav>
                <div className="top-nav">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left */}
                        <div className="col-md-6">
                            <a href="#" className="top-email">
                                <FaEnvelope className="icon" />
                                <span>
                                    <b>Email us at :</b> example@mail.com
                                </span>
                            </a>
                        </div>

                        {/* Right */}
                        <div className="col-md-6 topright_nav">
                            <ul>
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaDribbble /></a></li>
                                <li><a href="#"><FaLinkedinIn /></a></li>
                                <li><a href="#"><FaInstagram /></a></li>
                                <li><a href="#"><FaBehance /></a></li>
                            </ul>

                            <a href="#" className="topnav-call">
                                <FaPhoneAlt /> 123-4567 890
                            </a>
                        </div>

                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/img/top-logo.png" alt="" />
                        </div>
                        <div className="col-md-9">
                            <ul className='nav-content'>
                                <li>Projects</li>
                                <li>Communities</li>
                                <li>Blogs</li>
                                <li>Developers</li>
                                <li>Explore</li>
                                <li className='en-btn'>Enquire Now</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
