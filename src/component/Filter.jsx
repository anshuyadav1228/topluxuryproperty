import React from 'react'

function Filter() {
    return (
        <>
            <section className="fiter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className=" active"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#home"
                                        type="button"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true"
                                    >
                                        <img src="img/commercial.png" alt="" />
                                        Projects
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className=""
                                        id="profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected="false"
                                    > <img src="img/community1.png" alt="" />
                                        Communities
                                    </button>
                                </li>

                            </ul>

                            {/* <div className="tab-content mt-3" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="search">
                                        <form action="">
                                            <div className="form-wrapper">
                                                <div className="city">
                                                    <select className="form-select">
                                                        <option selected>City</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="serach-p">
                                                    <input type="text" className='form-control' placeholder='Search projects by title or city' />
                                                </div>
                                                <div className="Property">
                                                    <select className="form-select">
                                                        <option selected>Property Type</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="Property">
                                                    <select className="form-select">
                                                        <option selected>Property Type</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="Property">
                                                    <select className="form-select">
                                                        <option selected>Property Type</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="Property">
                                                    <input type="submit" value="Submit" className='submit-btn' />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    Profile Content
                                </div>

                            </div> */}


                            <div className="tab-content" id="locationtabContent">
                                {/* Rent Tab */}
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="Rent-tab"
                                >
                                    <form>
                                        <div className="location-filter">
                                            <div className="location-div">
                                                <p>Locations</p>
                                                <select className="form-select">
                                                    <option defaultValue>Select your city</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="location-div">
                                                <p>Property Type</p>
                                                <select className="form-select">
                                                    <option defaultValue>Select property type</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="location-div">
                                                <p>Rent Range</p>
                                                <select className="form-select">
                                                    <option defaultValue>Select rent range</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="location-div">
                                                <input
                                                    type="submit"
                                                    value="Search"
                                                    className="serach-locationbtn"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* Sale Tab */}
                                <div
                                    className="tab-pane fade"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="Sale-tab"
                                >
                                    <form>
                                        <div className="location-filter">
                                            <div className="location-div">
                                                <p>Locations</p>
                                                <select className="form-select">
                                                    <option defaultValue>Select your city</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="location-div">
                                                <p>Property Type</p>
                                                <select className="form-select">
                                                    <option defaultValue>Select property type</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="location-div">
                                                <p>Rent Range</p>
                                                <select className="form-select">
                                                    <option defaultValue>Select rent range</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="location-div">
                                                <input
                                                    type="submit"
                                                    value="Search"
                                                    className="serach-locationbtn"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filter
