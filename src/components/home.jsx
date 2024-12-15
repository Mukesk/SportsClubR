import React from 'react'
import Banner from "./banner"


import FixtureSlider from './fixtureslider'
import Gallery from './gallery'
import TeamRanking from './ranking'

const Home = () => {
  return (
    <>

      <Banner />
      <FixtureSlider />

      <div className="row ">
        <div className="col-xl-12  col-md-12 col">
          <Gallery />
        </div>
        <div className="col-xl-12  col-md-12 col">
          <TeamRanking />
        </div>

      </div>
      
    </>
  );
}

export default Home;
