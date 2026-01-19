import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "swiper/css";
const propertyList = [
    {
        id: 1,
        image: "img/card1.png",
        location: "Business Bay, Dubai",
        title: "Luxury House in Greenville",
        price: "$860,000",
        desc: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River...",
        beds: "1 & 2 Bedroom",
        area: "190 ft2",
    },
    {
        id: 2,
        image: "img/card1.png",
        location: "Palm Jumeirah, Dubai",
        title: "Sea View Villa",
        price: "$1,250,000",
        desc: "Sea-facing villa with luxury amenities and private access...",
        beds: "3 Bedroom",
        area: "350 ft2",
    },
    {
        id: 3,
        image: "img/card1.png",
        location: "Dubai Marina",
        title: "Marina View Apartment",
        price: "$920,000",
        desc: "Modern apartment with marina skyline view...",
        beds: "2 Bedroom",
        area: "220 ft2",
    },
    {
        id: 4,
        image: "img/card1.png",
        location: "Downtown Dubai",
        title: "Premium City Flat",
        price: "$780,000",
        desc: "Premium flat near Burj Khalifa with top-class facilities...",
        beds: "1 Bedroom",
        area: "180 ft2",
    },
];

function Brandedproperty() {
    return (
        <>
            <section className="Brandedproperty">
                  <img src="img/18132521.jpg" alt="" className='branded-ventor'/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 Branded-h">
                            <h2>Branded <span>Residences</span></h2>
                            <p>Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas.</p>
                            <a className='v-properties-btn' >View All properties <IoIosArrowForward/></a>
                        </div>
                        <div className="col-md-8">
                            <div className="slider-wrapper slider--branded">
                                {/* Custom Arrows */}
                                <div className="por-sw">
                                    <button className="prev-btn">
                                        <FaArrowLeft />
                                    </button>
                                    <button className="next-btn">
                                        <FaArrowRight />
                                    </button>
                                </div>

                                {/* Swiper */}
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        prevEl: ".prev-btn",
                                        nextEl: ".next-btn",
                                    }}
                                    spaceBetween={20}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                    }}
                                >
                                    {propertyList.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="card-property">
                                                <div className="img-pr">
                                                    <img src={item.image} alt={item.title} />
                                                    <p>
                                                        <img src="img/location.png" alt="" /> {item.location}
                                                    </p>
                                                </div>

                                                <div className="pr-content">
                                                    <h3>{item.title}</h3>
                                                    <span>{item.price}</span>
                                                    <p>{item.desc}</p>

                                                    <div className="list-a">
                                                        <ul>
                                                            <li>
                                                                <img src="img/icon1.png" alt="" /> {item.beds}
                                                            </li>
                                                            <li>
                                                                <img src="img/icon2.png" alt="" /> {item.area}
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <button>
                                                        <img src="img/calendar.png" alt="" /> Book a Meeting
                                                    </button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brandedproperty
