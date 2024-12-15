import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fixtureslider.css"

const FixtureSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const fixtures = [
        { date: "August 23, 2016", team1: "ARS", score1: 3, team2: "CHL", score2: 2 },
        { date: "August 25, 2016", team1: "BRC", score1: 5, team2: "RM", score2: 2 },
        { date: "August 28, 2016", team1: "CIT", score1: 3, team2: "KIN", score2: 3 },
        { date: "August 31, 2016", team1: "ST", score1: 0, team2: "FRA", score2: 1 },
        { date: "September 03, 2016", team1: "SPA", vs: "RM", status: "Full Booked" },
        // Add more fixtures as needed
    ];

    return (
        <div className="contact_form">
        <div className="sportsmagazine-fixture-slider" style={{color:"black"}}>
            <Slider {...settings} >
                {fixtures.map((fixture, index) => (
                    <div key={index} className="sportsmagazine-fixture-slider-layer">
                        <time dateTime="2008-02-14 20:00">{fixture.date}</time>
                        <ul className="sportsmagazine-bgcolor">
                            {fixture.team1 && fixture.team2 ? (
                                <>
                                    <li className="first-child">{fixture.team1} <span>{fixture.score1}</span></li>
                                    <li>{fixture.team2} <span>{fixture.score2}</span></li>
                                </>
                            ) : (
                                <li>{fixture.team1} VS <span>{fixture.vs}</span></li>
                            )}
                            {fixture.status && <li>{fixture.status}</li>}
                        </ul>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} slick-arrow-right`} onClick={onClick}>
            <i className="fa fa-angle-right" />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} slick-arrow-left`} onClick={onClick}>
            <i className="fa fa-angle-left" />
        </div>

    );
};

export default FixtureSlider;
